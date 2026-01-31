# MusicXP Website

Landing page oficial para o **MusicXP**, um widget de player de música moderno e interativo.

## 🚀 Sobre o Projeto

O MusicXP Website é uma aplicação desenvolvida com **React** e **Vite** para apresentar e distribuir o widget MusicXP. O site apresenta um design imersivo com cursores customizados, animações fluidas e links diretos para download do instalador.

## ✨ Funcionalidades

*   **Design Interativo**: Interface moderna com elementos visuais ricos e responsividade.
*   **Cursor Customizado**: Efeito visual de cursor que reage à interação do usuário.
*   **Animações**: Transições suaves e efeitos de "shuffle" no texto utilizando **GSAP** e **Framer Motion**.
*   **Downloads**: Acesso direto aos instaladores para **Windows** (`.exe`) e **Linux** (`.deb`).
*   **Links Sociais**: Integração com GitHub com efeitos de hover "glare".

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias principais:

*   **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces.
*   **[Vite](https://vitejs.dev/)**: Build tool rápida para desenvolvimento web moderno.
*   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para estilização rápida.
*   **[GSAP](https://gsap.com/)**: Biblioteca robusta para animações de alta performance.
*   **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca de motion para React.
*   **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)**: Renderizador React para Three.js (elementos 3D).

## 📦 Como Executar

Para rodar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/Gustavo-Mart/MusicXP-Website.git
    ```
2.  Entre na pasta do projeto:
    ```bash
    cd MusicXP-Website
    ```
3.  Instale as dependências (recomendado usar `pnpm` se disponível, ou `npm`):
    ```bash
    pnpm install
    # ou
    npm install
    ```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
pnpm run dev
# ou
npm run dev
```

O projeto estará rodando em `http://localhost:5173`.

### Build

Para gerar a versão de produção:

```bash
pnpm run build
```

## 📂 Estrutura do Projeto

*   `src/components`: Componentes reutilizáveis (MenuInstaller, CustomCursor, GlareHover, etc).
*   `src/screens`: Telas principais da aplicação (App.tsx).
*   `public`: Assets estáticos e arquivos de instalação.

---

Desenvolvido por [Gustavo Martinelli](https://github.com/Gustavo-Mart).
