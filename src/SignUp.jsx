import React, { useState } from "react";

function SignUpForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [passwordError, setPasswordError] = useState(""); // État pour stocker les erreurs du mot de passe

    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleConfirmChange = (e) => {
        const { value } = e.target;
        setPasswordConfirm(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail(formData.email) || !isValidPassword(formData.password)) {
            setPasswordError("Le mot de passe doit comporter au moins 8 caractères.");
            return;
        }

        if (formData.password !== passwordConfirm) {
            setPasswordConfirmError("Les mots de passe ne correspondent pas.");
            return;
        }

        setPasswordError("");
        setPasswordConfirmError("");

        const formDataObject = new FormData();
        for (const key in formData) {
            formDataObject.append(key, formData[key]);
        }

        setFormData({
            email: "",
            password: "",
        });
        setPasswordConfirm(""); // Réinitialisez la confirmation du mot de passe
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isValidPassword = (password) => {
        if (password.length < 8) {
            setPasswordError("Le mot de passe doit comporter au moins 8 caractères.");
            return false;
        }

        setPasswordError("");
        return true;
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2"></label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2"></label>
                <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {passwordError && (
                    <p className="text-red-500 text-xs italic">{passwordError}</p>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="passwordConfirm" className="block text-gray-700 font-bold mb-2"></label>
                <input
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirmer le mot de passe"
                    value={passwordConfirm}
                    onChange={handleConfirmChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {passwordConfirmError && (
                    <p className="text-red-500 text-xs italic">{passwordConfirmError}</p>
                )}
            </div>
            <button type="submit" className="bg-blue-500 hover.bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">S'inscrire</button>
        </form>
    );
}

export default SignUpForm;
