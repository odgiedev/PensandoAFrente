import React, { useState } from "react";

const HabitsApp = () => {
  const habits = [
    
    { 
      habit: "Pensei em meus objetivos 🎯", 
      benefits: "Refletir sobre os objetivos proporciona clareza mental, ajudando a organizar pensamentos e a compreender o que é realmente importante. Isso melhora a tomada de decisões, permitindo priorizar ações e evitar distrações desnecessárias. Ter metas claras aumenta a motivação, pois serve como um combustível emocional para agir e perseverar diante de dificuldades. Além disso, planejar os objetivos reduz o estresse, oferecendo uma sensação de controle sobre o futuro e promovendo o foco no crescimento pessoal, permitindo identificar áreas para melhoria e evolução." 
    },
    { 
      habit: "Plantei uma árvore 🌳", 
      benefits: "Ao plantar uma árvore você ajuda a preservar os recursos hídricos, além de contribuir para a redução da emissão de gases do efeito estufa, melhorar a qualidade do ar e proporcionar um habitat para animais. Árvores também ajudam na manutenção da biodiversidade e evitam a erosão do solo." 
    },
    { 
      habit: "Economizei água 💧", 
      benefits: "Ao economizar água, você preserva esse recurso essencial, contribui para garantir o abastecimento futuro e reduz o impacto ambiental do desperdício. Além disso, economizar água também reduz a energia necessária para tratá-la e bombeá-la." 
    },
    { 
      habit: "Pratiquei exercícios 🏋️‍♂️", 
      benefits: "A prática regular de exercícios melhora a saúde física e mental, aumenta a disposição, fortalece o sistema imunológico e reduz o estresse. Exercícios também contribuem para a saúde cardiovascular, ajudam no controle do peso e aumentam a longevidade." 
    },
    { 
      habit: "Reciclei materiais ♻️", 
      benefits: "Reciclar materiais reduz o impacto ambiental, evita o desperdício e diminui a necessidade de extração de novos recursos naturais. A reciclagem também economiza energia e ajuda a diminuir a poluição do solo e da água." 
    },
    { 
      habit: "Estudei para chegar em meus objetivos 📖", 
      benefits: "Dedicar-se aos estudos para alcançar metas proporciona a aquisição de conhecimento e habilidades práticas que aproximam os objetivos. O processo de estudo fortalece a disciplina e a resiliência, características fundamentais para superar desafios. Além disso, amplia a confiança em si mesmo, já que cada passo no aprendizado é um progresso em direção ao sucesso. Estudar também expande perspectivas, permitindo soluções mais criativas e eficientes para problemas. Por fim, investir em conhecimento aumenta as chances de sucesso e cria uma base sólida para sustentar as conquistas futuras."
    },
    { 
      habit: "Meditei 🧘‍♂️", 
      benefits: "Meditar reduz o estresse, melhora o foco e a concentração, além de aumentar a capacidade de lidar com as emoções. A meditação promove o bem-estar geral, reduz a ansiedade e pode melhorar a saúde mental e emocional." 
    },
    { 
      habit: "Adotei transporte sustentável 🚶‍♂️🚲", 
      benefits: "Ao usar transporte sustentável, você ajuda a reduzir a poluição do ar, diminui o congestionamento nas cidades e reduz a emissão de gases do efeito estufa. Além disso, caminhar ou andar de bicicleta melhora a saúde física, fortalece os músculos e contribui para o bem-estar." 
    },
    { 
      habit: "Comprei produtos orgânicos 🍅", 
      benefits: "Ao escolher produtos orgânicos, você apoia práticas agrícolas sustentáveis, evitando pesticidas e conservantes químicos. Os alimentos orgânicos são mais nutritivos e ajudam a preservar a biodiversidade, além de proteger o solo e os recursos hídricos." 
    },
    { 
      habit: "Li mais livros 📚", 
      benefits: "A leitura expande o conhecimento, melhora o vocabulário, aprimora o pensamento crítico e promove a criatividade. Além disso, ler regularmente aumenta a concentração e o foco, ajuda a reduzir o estresse e melhora o bem-estar emocional." 
    },
    { 
      habit: "Reduzi o uso de plásticos 🛍️", 
      benefits: "Reduzir o uso de plásticos ajuda a combater a poluição ambiental, preserva os ecossistemas marinhos e terrestres e diminui a quantidade de resíduos nos aterros. Além disso, o uso de alternativas reutilizáveis e ecológicas contribui para a economia circular." 
    },
    { 
      habit: "Plantei uma horta em casa 🌱", 
      benefits: "Cultivar uma horta caseira melhora a segurança alimentar, proporciona alimentos frescos e saudáveis e reduz o impacto ambiental do transporte de alimentos. Além disso, plantar uma horta em casa promove o aprendizado sobre agricultura sustentável e fortalece a conexão com a natureza." 
    },
    { 
      habit: "Fiz trabalho voluntário 🤝", 
      benefits: "O trabalho voluntário contribui para a melhoria da comunidade, ajuda pessoas em situação de vulnerabilidade e fortalece a solidariedade. Também desenvolve habilidades de liderança, empatia e promove o bem-estar pessoal ao criar um sentido de propósito." 
    },
    { 
      habit: "Comi mais vegetais 🥦", 
      benefits: "Adicionar mais vegetais à alimentação melhora a saúde digestiva, reduz o risco de doenças crônicas e fortalece o sistema imunológico. Vegetais são ricos em fibras, vitaminas e antioxidantes, que contribuem para a prevenção de várias doenças e promovem a saúde geral." 
    },
    { 
      habit: "Fui mais ao ar livre 🌞", 
      benefits: "Passar tempo ao ar livre melhora o humor, reduz o estresse e aumenta a produção de vitamina D, essencial para a saúde óssea e imunológica. Além disso, o contato com a natureza traz benefícios terapêuticos, melhora a concentração e aumenta a energia." 
    },
    { 
      habit: "Doei roupas e objetos 🎽", 
      benefits: "Ao doar roupas e objetos, você contribui para a economia circular, reduz o desperdício e ajuda pessoas que precisam. Doar também diminui a quantidade de resíduos nos aterros e promove a reutilização, prolongando a vida útil dos itens." 
    },
    { 
      habit: "Evitei comida processada 🍔", 
      benefits: "Evitar alimentos processados ajuda a manter uma alimentação mais saudável, rica em nutrientes e livre de aditivos artificiais. Isso também pode contribuir para o controle do peso, melhora da digestão e prevenção de doenças relacionadas à alimentação inadequada." 
    },
    { 
      habit: "Fiz caminhada diária 🚶‍♂️", 
      benefits: "Caminhar diariamente melhora a saúde cardiovascular, fortalece os músculos e articulações e contribui para o controle do peso. Além disso, caminhar é uma excelente forma de reduzir o estresse e melhorar o humor." 
    },
    { 
      habit: "Pratiquei yoga 🧘‍♀️", 
      benefits: "A yoga melhora a flexibilidade, reduz o estresse, aumenta a concentração e melhora o equilíbrio físico e mental. Ela também contribui para o fortalecimento dos músculos, a melhoria da postura e o aumento da saúde geral." 
    },
    { 
      habit: "Tirei tempo para descanso e lazer 🎮", 
      benefits: "O descanso adequado melhora a produtividade, reduz o estresse e promove o equilíbrio emocional. Ao dedicar tempo para o lazer, você também melhora a qualidade do sono e rejuvenesce mentalmente." 
    },
    { 
      habit: "Usei energia solar 🔋", 
      benefits: "A energia solar é uma fonte limpa e renovável que ajuda a reduzir a dependência de combustíveis fósseis e a combater as mudanças climáticas. Usar energia solar também pode reduzir a conta de eletricidade e contribuir para um futuro mais sustentável." 
    },
    { 
      habit: "Comprei produtos locais 🏙️", 
      benefits: "Comprar produtos locais apoia a economia local, reduz a pegada de carbono e contribui para o fortalecimento da cadeia produtiva regional. Além disso, alimentos locais são geralmente mais frescos e mais nutritivos." 
    },
    { 
      habit: "Fui mais gentil com os outros 🤗", 
      benefits: "Ser gentil melhora a qualidade das relações interpessoais, promove um ambiente mais harmonioso e fortalece o vínculo com a comunidade. A gentileza também tem efeitos positivos na saúde mental e emocional, reduzindo o estresse e aumentando a felicidade." 
    },
    { 
      habit: "Participei de eventos culturais 🎭", 
      benefits: "Participar de eventos culturais enriquece o conhecimento, promove a expressão artística e contribui para o fortalecimento da identidade cultural. Além disso, eventos culturais promovem a interação social, o aprendizado e ajudam a construir uma comunidade mais unida." 
    },
    { 
      habit: "Assisti menos TV 📺", 
      benefits: "Reduzir o tempo diante da televisão permite que você se dedique a outras atividades mais produtivas, como leitura, exercícios ou aprendizado. Isso também contribui para a melhoria da saúde mental, promovendo mais tempo para reflexões e interações sociais." 
    },
    { 
      habit: "Fiz mais networking profissional 💼", 
      benefits: "Expandir a rede de contatos profissionais ajuda a abrir portas para novas oportunidades de trabalho, parcerias e crescimento na carreira. Além disso, o networking permite compartilhar conhecimentos e aprender com a experiência de outros." 
    },
    { 
      habit: "Experimentei receitas veganas 🥗", 
      benefits: "Explorar a culinária vegana proporciona uma alimentação mais saudável, rica em vegetais, grãos e legumes, além de ser uma escolha sustentável e ética. Receitas veganas também podem ser mais leves e contribuir para a redução do impacto ambiental." 
    },
    { 
      habit: "Estudei um idioma 🌍", 
      benefits: "Aprender um novo idioma expande as habilidades cognitivas, melhora a memória e aumenta as oportunidades profissionais. Além disso, promove maior compreensão cultural, ampliando a capacidade de comunicação em ambientes internacionais." 
    },
    { 
      habit: "Fiz uma pausa dos dispositivos eletrônicos 📴", 
      benefits: "Desconectar-se dos dispositivos reduz a fadiga ocular, melhora a qualidade do sono e promove um melhor equilíbrio entre a vida digital e pessoal. Ajuda também a aumentar o foco e a reduzir o estresse associado ao uso excessivo de tecnologia." 
    },
    { 
      habit: "Promovi diálogos sobre sustentabilidade 🌱", 
      benefits: "Iniciar conversas sobre sustentabilidade conscientiza as pessoas ao redor, criando um impacto coletivo positivo. Ajuda a compartilhar ideias, aprender novas práticas e incentivar mudanças significativas na comunidade." 
    },
    { 
      habit: "Participei de uma campanha de doação de sangue 🩸", 
      benefits: "Doar sangue salva vidas, ajudando pacientes em situações de emergência, cirurgias e tratamentos de doenças graves. Além disso, promove maior consciência social e pode estimular outras pessoas a fazerem o mesmo." 
    },
  ];  

  const [selectedHabits, setSelectedHabits] = useState([]);
  const [confirmedHabits, setConfirmedHabits] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const toggleHabit = (habit) => {
    if (isConfirmed) return;
    if (confirmedHabits.some((h) => h.habit === habit.habit)) return; 

    setSelectedHabits((prev) =>
      prev.some((h) => h.habit === habit.habit)
        ? prev.filter((h) => h.habit !== habit.habit)
        : [...prev, habit]
    );
  };

  const confirmSelection = () => {
    setConfirmedHabits((prev) => [...prev, ...selectedHabits]);
    setSelectedHabits([]);
    setIsConfirmed(true);
  };

  const clearSelection = () => {
    setSelectedHabits([]);
    setConfirmedHabits([]);
    setIsConfirmed(false);
  };

  const uniqueBenefits = [
    ...new Set(confirmedHabits.map((habit) => habit.benefits)),
  ];

  return (
    <div className="px-6 pt-6 pb-32 min-h-screen bg-gradient-to-b from-indigo-950 to-slate-900">
      <h1 className="text-5xl font-bold text-center mt-8 mb-16 ">Olá, o que você fez hoje? 🌟</h1>

      <ul className="flex flex-wrap justify-center gap-4">
        {habits.map((item, index) => {
          const isSelected = selectedHabits.some((h) => h.habit === item.habit);
          const isConfirmed = confirmedHabits.some((h) => h.habit === item.habit);

          return (
            <li
              key={index}
              className={`font-semibold flex w-2/5 justify-between items-center p-4 border rounded-lg cursor-pointer transition-colors 
                ${
                  isConfirmed
                    ? "bg-gray-300 bg-gray-700 text-gray-500 cursor-not-allowed"
                    : isSelected
                    ? "bg-blue-500 text-white bg-blue-400"
                    : "bg-white bg-gray-800 hover:bg-gray-700 border-gray-700"
                }`}
              onClick={() => toggleHabit(item)}
            >
              <span>{item.habit}</span>
              {isSelected && !isConfirmed && <span>✔️</span>}
              {isConfirmed && <span>✅</span>}
            </li>
          );
        })}
      </ul>

      <button
        className={`mt-6 w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 hover:bg-blue-400 ${
          selectedHabits.length === 0 && "opacity-50 cursor-not-allowed"
        }`}
        onClick={confirmSelection}
        disabled={selectedHabits.length === 0}
      >
        Confirmar
      </button>

      {uniqueBenefits.length > 0 && (
        <>
          <div className="mt-6 p-4 rounded-lg">
            <h2 className="text-2xl text-center font-bold mb-4">Parabéns!</h2>
            {confirmedHabits.map((habit, index) => (
              <div key={index} className="mb-4 p-4 bg-white bg-green-600 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg">{habit.habit}</h3>
                <p className="mt-2">{habit.benefits}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              className="text-xl bg-green-800 text-white p-2 rounded-lg hover:bg-green-700 hover:bg-green-700"
              onClick={clearSelection}
            >
              ↪️
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HabitsApp;
