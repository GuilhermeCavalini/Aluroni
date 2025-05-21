import classNames from "classnames";
import styles from "./TagsPrato.module.scss";
import cardapio from "data/cardapio.json";
import { Cardapio, Prato } from "types/Prato";

type Props = (typeof cardapio)[0];

export default function TagsPrato({ size, serving, price, category }: Props) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__tipo]: true,
          [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcao}>{size}g</div>
      <div className={styles.tags__qtdpessoas}>
        {serving} 2 pessoas{serving === 1 ? "" : "s"}
      </div>
      <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}
