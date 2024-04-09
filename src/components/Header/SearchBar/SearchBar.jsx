import { useState } from "react";
import Input from "../../Input/Input";
import styled from "styled-components";
import { books } from "./DataSearch.js";

const SearchContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 50px 0 !important;
  width: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  margin-bottom: 10px !important;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px !important;
`;

const BooksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  color: white;
`

const Book = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`

const SearchBar = () => {
  const [book, setBook] = useState([]);

  return (
    <>
      <SearchContainer>
        <Title>Já sabe por onde começar?</Title>
        <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
        <Input
          type="text"
          onBlur={(e) => {
            const wordText = e.target.value;
            const resultSearch = books.filter((livro) =>
              livro.name.includes(wordText)
            );
            setBook(resultSearch);
          }}
          placeholder="O que você procura..."
        />
      </SearchContainer>
      <BooksContainer>
        {book.map((e) => (
          <Book>
            <p>{e.name}</p>
            <img src={e.src} alt={e.name} />
          </Book>
        ))}
      </BooksContainer>
    </>
  );
};

export default SearchBar;
