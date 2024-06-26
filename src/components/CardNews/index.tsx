import { CardNewsProps } from '../../types';
import BtnFavorite from '../BtnFavorite';
import styles from './CardNews.module.css';

export default function CardNews({
  id,
  imageIntro,
  titulo,
  introducao,
  link,
  tipo,
  data_publicacao,
}:CardNewsProps) {
  // Função para calcular a quantidade de dias passados desde a publicação
  // https://www.hashtagtreinamentos.com/como-calcular-diferenca-entre-datas-em-javascript/

  function calcularDiasPassados(dataCalcular: string): number {
    const partesData: string[] = dataCalcular.split('/');
    const dia: number = parseInt(partesData[0], 10);
    const mes: number = parseInt(partesData[1], 10) - 1;
    const ano: number = parseInt(partesData[2], 10);

    const agora: Date = new Date();
    const dataPublicacao: Date = new Date(ano, mes, dia);
    const diferencaMilisSegundos: number = agora.getTime() - dataPublicacao.getTime();

    // Converter a diferença em milissegundos para dias
    const diasPassados: number = Math
      .floor(diferencaMilisSegundos / (1000 * 60 * 60 * 24));

    return diasPassados;
  }

  const DataRetroativa = calcularDiasPassados(data_publicacao);
  const DataRetroativaString = DataRetroativa === 1
    ? `${DataRetroativa} dia atrás`
    : `${DataRetroativa} dias atrás`;

  const imgSrting = `https://agenciadenoticias.ibge.gov.br/${imageIntro}`;

  return (
    <div className={ styles.CardNews }>
      <div data-testid="Box-Card-News" className={ styles.CardNewsContent }>
        <div className={ styles.CardNewsImage } data-testid="Card-News-Imagem">
          <img src={ imgSrting } alt="NewsImg" />
        </div>
        <h2 className={ styles.CardNewsTitle } data-testid="Card-News-Titulo">
          {titulo}
        </h2>

        <p className={ styles.CardNewsIntroducao } data-testid="Card-News-Introducao">
          {introducao}
        </p>
        <div className={ styles.CardNewsLine }>
          <p className={ styles.CardNewsData } data-testid="Card-News-Data">
            {DataRetroativaString}
          </p>

          <a
            href={ link }
            className={ styles.CardNewsLink }
            target="_blank"
            rel="noopener noreferrer"
            data-testid="Card-News-Link"
          >
            Leia a notícia aqui
          </a>
        </div>

        <div className={ styles.CardNewsLine }>
          <p className={ styles.CardNewsTipo } data-testid="Card-News-tipo">
            {tipo}
          </p>
          <BtnFavorite
            data-testid="Card-News-btnFavorite"
            newsFavorite={ {
              id,
              titulo,
              introducao,
              tipo,
              data_publicacao,
              link,
              imageIntro,
            } }
          />

        </div>
      </div>

    </div>
  );
}
