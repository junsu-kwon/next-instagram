import { createPortal } from 'react-dom';
type Props = {
  children: React.ReactNode;
};

// body에 자식요소를 생성 시켜줌
export default function ModalPortal({ children }: Props) {
  // 서버에서는 실행시키지 않기 위함
  if (typeof window === 'undefined') {
    return null;
  }

  return createPortal(children, document.body);
}
