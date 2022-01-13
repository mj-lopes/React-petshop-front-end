import QuoteImg from "../../../asserts/quote.png";
import QuoteImgMobile from "../../../asserts/quote-mobile.png";
import { Quote, QuoteWrapper } from "./style";

const FooterQuote = () => {
  return (
    <QuoteWrapper imgUrl={QuoteImg} imgMobileUrl={QuoteImgMobile}>
      <blockquote>
        <Quote>
          Eles fazem parte somente de uma fração de nossas vidas, porém para
          eles, nós somos para toda ela.
        </Quote>
      </blockquote>
    </QuoteWrapper>
  );
};
export default FooterQuote;
