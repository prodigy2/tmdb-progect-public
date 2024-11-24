import React from "react";

const UserInfo = () => {
    return (
        <div style={styles.container}>
            <div style={styles.avatarContainer}>
                <img
                    src="/avatar.jpg"  // Nuovo percorso dell'immagine
                    alt="Jhon Doe"
                    style={styles.avatarImage}
                />
            </div>
            <span style={styles.name}>John Doe</span>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    avatarContainer: {
        width: "60px",  // Aumentato per renderlo più grande
        height: "60px", // Aumentato per renderlo più grande
        borderRadius: "50%",
        overflow: "hidden", // Per fare in modo che l'immagine sia rotonda
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #4A90E2", // Bordo opzionale per evidenziare l'avatar
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Ombra dietro al cerchio
    },
    avatarImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover", // Adatta l'immagine all'area mantenendo le proporzioni
    },
    name: {
        fontSize: "14px",
        color: "#333",
        fontWeight: "500",
    },
};

export default UserInfo;
