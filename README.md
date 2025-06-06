# 🛒 Projeto: UStore – E-commerce com Next.js + HeroUI

## 📌 Descrição  
UStore é um e-commerce desenvolvido com **Next.js (App Router)** que permite aos usuários visualizar, pesquisar, filtrar e adicionar produtos ao carrinho. Para utilizar o carrinho, é necessário estar logado.

## 🌐 Páginas  
- **/**: Redireciona para a página de produtos.  
- **/products/**: Lista todos os produtos disponíveis.  
- **/products/[id]/**: Detalhes de um produto específico.  
- **/products/category/**: Exibe produtos filtrados por categoria.  
- **/auth/login/**: Página de login.

## 🛠️ Tecnologias Utilizadas  
- **Next.js (App Router)**  
- **TypeScript**  
- **Tailwind CSS**  
- **HeroUI**

## 🗂️ Principais Pastas de Componentes  
- **`about/`**: Aqui fica o Modal de sobre.
- **`alert/`**: Componente de alerta personalizado (pop-up).  
- **`auth/`**: Formulário de login.  
- **`drawer/`**: Painel lateral que exibe e gerencia o carrinho (somente para usuários logados).  
- **`footer/`**: Rodapé e seus componentes.  
- **`navbar/`**: Barra de navegação.  
- **`product/`**: Componentes relacionados à apresentação de produtos, como o `HeroCardProduct`.  
- **`product-category/`**: Componente para filtragem por categoria.  
- **`search-bar/`**: Componente de busca textual.

## ▶️ Como Rodar o Projeto

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Gerar a build para produção
npm run build
```