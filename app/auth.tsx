import { useMemo, useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { z } from "zod";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Screen from "../components/ui/Screen";
import AuthHeader from "../components/auth/AuthHeader";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import AuthSwitch from "../components/auth/AuthSwitch";

const loginSchema = z.object({
  email: z.email("Enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.email("Enter a valid email address."),
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string().min(6, "Confirm your password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

type FieldErrors = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { isAuthenticated, login, logout } = useAuth();
  const router = useRouter();

  const validation = useMemo(() => {
    const result = isLogin
      ? loginSchema.safeParse({ email, password })
      : registerSchema.safeParse({ name, email, password, confirmPassword });

    if (result.success) {
      return { isValid: true, errors: {} as FieldErrors };
    }

    const errors: FieldErrors = {};

    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof FieldErrors | undefined;
      if (field && !errors[field]) {
        errors[field] = issue.message;
      }
    }

    return { isValid: false, errors };
  }, [isLogin, name, email, password, confirmPassword]);

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleToggleMode = () => {
    setIsLogin((prev) => !prev);
    clearForm();
  };

  const handleSubmit = () => {
    const result = isLogin
        ? loginSchema.safeParse({ email, password })
        : registerSchema.safeParse({ name, email, password, confirmPassword });

    if (!result.success) {
        Alert.alert("Form Error", "Please fix the highlighted fields.");
        return;
    }

    login();              
    router.replace("/");  
  };

  const handleLogout = () => {
    logout();
    router.replace("/auth");
};

  return(
    <Screen>
        <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
        <ScrollView contentContainerStyle={styles.content}>

            <View style={styles.backRow}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                </View>
            
            {isAuthenticated ? (
            <>
                <AuthHeader isLogin={true} />

                <Text style={styles.loggedInText}>
                You are logged in.
                </Text>

                <AuthButton label="Log Out" onPress={handleLogout} />
            </>
            ) : (
            <>
                <AuthHeader isLogin={isLogin} />

                {!isLogin && (
                <AuthInput
                    label="Name"
                    value={name}
                    onChangeText={setName}
                    placeholder="Your name"
                    error={validation.errors.name}
                />
                )}

                <AuthInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="you@example.com"
                error={validation.errors.email}
                />

                <AuthInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                placeholder="Enter password"
                secureTextEntry
                error={validation.errors.password}
                />

                {!isLogin && (
                <AuthInput
                    label="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirm password"
                    secureTextEntry
                    error={validation.errors.confirmPassword}
                />
                )}

                <AuthButton
                label={isLogin ? "Log In" : "Create Account"}
                onPress={handleSubmit}
                disabled={!validation.isValid}
                />

                <AuthSwitch isLogin={isLogin} onToggle={handleToggleMode} />
            </>
            )}

        </ScrollView>
        </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 40,
  },
  loggedInText: {
    color: "#A1A1B3",
    fontSize: 16,
    marginBottom: 24,
  },
  backRow: {
    marginBottom: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 4,
  },
});