import React from 'react';

/**
 * Renders a login form component.
 * @returns {JSX.Element} The login form component.
 */
function Connexion() {
    // ...
}
function Connexion() {
    return ( 
        <>
        <div className="connexionBox"> 
            <form className="connexion">
                <input type="text" placeholder="Pseudo" required />
                <input type="text" placeholder="Mot de passe" required />
                <button type="submit">GO</button>
            </form>
        </div>
        </>
     );
}

export default Connexion;