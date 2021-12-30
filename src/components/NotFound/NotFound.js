import s from './NotFound.module.css';

export default function NotFoundView({ text }) {
  return <p className={s.error}>{text}</p>;
}
