import React from "react";

const UserInfo = () => {
    return (
        <div style={styles.container}>
            <div style={styles.avatarContainer}>
                <img src='avatar.jpg' alt="User Avatar" style={styles.avatarImage} />
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
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        overflow: "hidden", // Per assicurarsi che l'immagine sia rotonda
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover", // Adatta l'immagine all'area del contenitore
    },
    name: {
        fontSize: "14px",
        color: "#333",
        fontWeight: "500",
    },
};

export default UserInfo;
