import React from 'react';

/**
 * Renders a login form component.
 * @returns {JSX.Element} The login form component.
 */
function SignIn() {
    return (
        <>
            <div className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2"></label>
                    <input
                        type="text"
                        placeholder="Username"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        autoComplete='username'
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2"></label>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        autoComplete='email'
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2"></label>
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        autoComplete='current-password'
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Connexion</button>
            </div>
        </>
    );
}

export default SignIn;
