import React from "react";

const UserInfo = () => {
    return (
        <div style={styles.container}>
        <div style={styles.avatar}>U</div>
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
    avatar: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#4A90E2",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: "16px",
    },
    name: {
        fontSize: "14px",
        color: "#333",
        fontWeight: "500",
    },
};

export default UserInfo;