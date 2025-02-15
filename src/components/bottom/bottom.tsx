import React, { useState } from "react";

interface BottomProps {
    handleSubmit: (e: React.FormEvent, text: string) => void;
    isLoading: boolean;
}

export const Bottom: React.FC<BottomProps> = ({ handleSubmit, isLoading }) => {
    const [text, setText] = useState<string>("");

    return (
        <div className="bottom">
            <div className="form-container">
                <form
                    onSubmit={(e) => {
                        handleSubmit(e, text);
                        setText("");
                    }}
                >
                    <label>Escreva a notícia aqui:</label>
                    <textarea
                        placeholder="Digite aqui a notícia pra gente verificar pra você!"
                        id="text"
                        name="text"
                        value={text}
                        disabled={isLoading}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmit(e, text);
                                setText("");
                            }
                        }}
                        className="chatInput"
                        onChange={(e) => setText(e.target.value)}
                    />
                    <br />
                    <button type="submit" className="sendButton" disabled={isLoading}
                        style={{
                            backgroundColor: isLoading ? "#cccccc" : "#5183fe",
                            cursor: isLoading ? "not-allowed" : "pointer",
                        }} >
                        {isLoading ? "Carregando..." : "Enviar"}
                    </button>
                </form>
            </div>
        </div>
    );
};
