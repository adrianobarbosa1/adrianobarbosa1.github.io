import { useEffect, useState } from "react";
import "./TextHome.css";

const TextHome = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [delay, setDelay] = useState(30);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const text = `
    Olá,

    Se você está procurando um desenvolvedor web apaixonado pelo que faz, você encontrou a pessoa certa!
    
    Eu criei este blog para compartilhar minha experiência e conhecimento adquirido ao longo dos anos de trabalho com programação. Aqui você encontrará posts sobre conceitos fundamentais de desenvolvimento de software e minhas experiências no dia a dia como desenvolvedor.
    
    Como você pode ver, sou um desenvolvedor que está sempre procurando aprender mais e se manter atualizado com as últimas tecnologias.
    
    Se você estiver interessado em saber mais sobre minhas habilidades e experiência, confira os posts abaixo ou entre em contato comigo se tiver alguma dúvida ou oportunidade de trabalho.
    
    Agradeço pelo seu tempo e consideração!`;
    setText(text);
  }, []);

  useEffect(() => {
    if (completed) {
      return;
    }
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCompleted(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex, delay, text.length, completed]);

  const handleKeyDown = (event: any) => {
    if (!completed) {
      const letter = event.key;
      const nextIndex = currentIndex + 1;
      if (text[currentIndex] !== letter) {
        setTimeout(() => {
          setCurrentIndex(nextIndex);
        }, 500);
      } else {
        setCurrentIndex(nextIndex);
      }
    }
  };

  useEffect(() => {
    if (completed) {
      setTimeout(() => {
        setCurrentIndex(text.length);
      }, 3000);
    }
  }, [completed, text.length]);

  return (
    <>
      <div className="text-home" onKeyDown={handleKeyDown} tabIndex={0}>
        <h5>{text.substring(0, currentIndex)}</h5>
        {completed && <p className="completed"></p>}
      </div>
      <div className="space" />
    </>
  );
};

export default TextHome;
