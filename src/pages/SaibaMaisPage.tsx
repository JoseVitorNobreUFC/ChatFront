import React from "react";
import { Link } from "react-router-dom";
import Chat from "../components/chat/Chat";
import { MessageBot } from "../components/message/message";

const SaibaMaisPage: React.FC = () => {
    return (
        <div style={{ padding: "20px" }}>
            <div className="container">
            <Chat>
                <MessageBot 
                        text={
                            <>
                                Eaí macho! Eu sou um bot que classifica notícias como falsas ou verdadeiras. Por usar modelos de inteligência artificial, minhas informações não são 100% corretas. Não vai achando que eu sou o dono da razão! 
                            </>
                        } 
                    />
                <MessageBot 
                text= {
                    <>
                    Para que eu consiga te responder melhor, use mensagens sem ponto de interrogação. Por exemplo, ao invés de escrever 'o céu é azul?' escreva 'o céu é azul', que eu entendo melhor! Mas ei, eu tô limitado a questões relacionadas a política brasileira, então se for perguntar de futebol eu não vou responder direito hein?!
                    Para voltar para o chat, clique aqui <Link to="/">Voltar para a página principal</Link>
                    
                 </>
            } />
            </Chat>
                
            </div>
        </div>
    );
};

export default SaibaMaisPage;
