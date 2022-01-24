import Link from "next/link";
import Modal from "./Modal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

// TODO: feature parity with wordle
export default function SettingsModal(props: Props) {
  function handleReset() {
    localStorage.removeItem("katla:gameState");
    localStorage.removeItem("katla:gameStats");
    localStorage.removeItem("katla:lastHash");
    window.location.reload();
  }

  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Title>Informasaun</Modal.Title>
      <p className="mb-4">
        <strong>Tetun World</strong> mak kopia hosi{" "}
        <a
          href="https://katla.vercel.app/"
          className="text-green-600 hover:underline"
        >
          Katla
        </a>{" "}
        ne&apos;ebé adaptasaun hosi{" "}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="text-green-600 hover:underline"
        >
          Wordle
        </a>
      </p>
      <p>
        <h2 className="text-xl">Hetan problema bainhira uza game?</h2>
        <Link href="/debug">
          <a className="text-green-600">Haruka relatóriu bug</a>
        </Link>
        <span> ka </span>
        <button onClick={handleReset} className="text-green-600">
          reset sesaun internet agora
        </button>
      </p>
    </Modal>
  );
}
