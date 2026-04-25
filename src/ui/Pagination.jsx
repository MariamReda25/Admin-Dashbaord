import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useSearchParams } from "react-router";
import styled from "styled-components";
import { ITEMS_PER_PAGE } from "../utils/configs";

const StyledPagination = styled.div`
  display: flex;
  gap: 0.8rem;
  padding: 0.8rem 2rem;
`;

const Button = styled.button`
  background-color: var(--color-green-700);
  border: none;
  padding: 0.4rem;
  border-radius: 9px;

  & svg {
    color: var(--color-grey-0);
  }
`;

const Page = styled.span`
  color: var(--color-grey-800);
`;
function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  let currentPage = +searchParams.get("page") || 1;
  const pagesCount = Math.ceil(count / ITEMS_PER_PAGE);

  function prevPage() {
    currentPage--;
    searchParams.set("page", currentPage);
    setSearchParams(searchParams);
  }

  function nextPage() {
    currentPage++;
    searchParams.set("page", currentPage);
    setSearchParams(searchParams);
  }
  return (
    <StyledPagination>
      <Button disabled={currentPage <= 1} onClick={prevPage}>
        <HiArrowLeft />
      </Button>
      <Page>{currentPage}</Page>
      <Button disabled={currentPage === pagesCount} onClick={nextPage}>
        <HiArrowRight />
      </Button>
    </StyledPagination>
  );
}

export default Pagination;
