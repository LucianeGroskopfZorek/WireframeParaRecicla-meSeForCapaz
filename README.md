# ♻️ Recicla-me Se For Capaz

> Sistema de alertas de coleta de lixo comum e seletivo para os moradores de **Canoinhas, Santa Catarina, Brasil**.

[![Figma Wireframe](https://img.shields.io/badge/Figma-Wireframe-2F844B?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/make/Yi4VkYmgfeQLVUqnhLCcr2/Wireframe-para-Recicla-me-Se-For-Capaz)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

---

## 🎯 Sobre o projeto

O **Recicla-me Se For Capaz** envia lembretes automáticos para que o morador saiba em qual dia da semana passa a coleta de lixo **comum** e **seletiva (reciclável)** no seu bairro — evitando que esqueça de colocar o lixo para fora ou misture os tipos de resíduo.

---

## 🖼️ Wireframe interativo

Acesse o protótipo completo no Figma Make:

🔗 **[Abrir wireframe →](https://www.figma.com/make/Yi4VkYmgfeQLVUqnhLCcr2/Wireframe-para-Recicla-me-Se-For-Capaz)**

<a href="https://www.figma.com/make/Yi4VkYmgfeQLVUqnhLCcr2/Wireframe-para-Recicla-me-Se-For-Capaz" target="_blank">
  <img src="docs/preview.png" alt="Preview do wireframe Recicla-me Se For Capaz" width="100%" style="border-radius:12px;border:1px solid #DDE6DF" />
</a>

> _Caso a imagem não carregue, [clique aqui para acessar o wireframe](https://www.figma.com/make/Yi4VkYmgfeQLVUqnhLCcr2/Wireframe-para-Recicla-me-Se-For-Capaz)._

---

## 📱 Telas do sistema

| Tela | Descrição |
|------|-----------|
| **Onboarding** | Boas-vindas e apresentação do serviço |
| **Cadastro** | Nome, bairro, endereço e canal de notificação |
| **Painel (Home)** | Próxima coleta em destaque + strip semanal |
| **Calendário** | Visualização semanal e mensal por tipo de coleta |
| **Alertas** | Histórico de notificações e configuração de lembretes |
| **Meu Bairro** | Dias de coleta, mapa e reporte de problemas |
| **Perfil** | Dados cadastrais e preferências do usuário |

---

## 🎨 Identidade visual

| Token | Cor | Uso |
|-------|-----|-----|
| Verde primário | `#2F844B` | Coleta seletiva, sidebar, elementos ativos |
| Laranja ação | `#FE710D` | Lixo comum, botões CTA, urgência |
| Amarelo destaque | `#F3CE49` | Badges de contagem regressiva, indicadores "novo" |
| Verde-sálvia | `#69A96C` | Sucesso, hover, cards secundários |
| Cinza-chumbo | `#50534C` | Texto principal |
| Fundo | `#FAF8F5` | Fundo neutro creme |

---

## 🗂️ Estrutura do projeto

```
src/
├── App.tsx        # Componente principal com todas as 7 telas
├── index.css      # Tailwind CSS v4 + tokens de tema + Google Fonts
└── main.tsx       # Entrypoint React
```

---

## 🚀 Como rodar localmente

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

Acesse `http://localhost:8443` no navegador.

---

## 🏙️ Contexto

Projeto desenvolvido para a cidade de **Canoinhas, SC** — wireframe responsivo (mobile-first + desktop) com navegação por bottom tab bar no mobile e sidebar fixa no desktop.

---

*Desenvolvido com [Figma Make](https://figma.com/make) · React 19 · Vite 8 · Tailwind CSS v4*
