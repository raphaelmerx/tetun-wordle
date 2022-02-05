import Modal from "./Modal";
import Tile from "./Tile";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpModal(props: Props) {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Title>Oinsá atu halimar</Modal.Title>
      <div className="text-sm">
        <p className="mb-2">
          Siik to&apos;ok liafuan segredu, koko dala 6 ba okos.
        </p>
        <p className="mb-2">
          Liafuan koko hotu-hotu tenke iha letra 5. Hanehan ENTER hodi haruka
          resposta.
        </p>
        <p className="mb-2">
          Depoizde haruka resposta, kór letra sei muda hodi hatudu letra
          ne&apos;ebé loos ka lae.
        </p>
        <hr className="border-gray-700 mb-4" />
        <strong className="text-lg mb-4 block">Porezemplu</strong>
        <div
          className="grid grid-cols-5 grid-rows-1 gap-1.5 w-64 mb-2"
          style={{ aspectRatio: "6 / 1" }}
        >
          {"saude".split("").map((char, i) => {
            return (
              <Tile
                key={i}
                char={char}
                state={char === "s" ? "correct" : null}
                delay={0}
              />
            );
          })}
        </div>
        <div className="mb-4">
          Liafuan iha letra <strong>S</strong> no pozisaun loos ona.
        </div>
        <div
          className="grid grid-cols-5 grid-rows-1 gap-1.5 w-64 mb-2"
          style={{ aspectRatio: "6 / 1" }}
        >
          {"saldu".split("").map((char, i) => {
            return (
              <Tile
                key={i}
                char={char}
                state={char === "a" ? "exist" : null}
                delay={0}
              />
            );
          })}
        </div>
        <div className="mb-4">
          Liafuan iha letra <strong>A</strong> maibé pozisaun seidauk loos.
        </div>
        <div
          className="grid grid-cols-5 grid-rows-1 gap-1.5 w-64 mb-2"
          style={{ aspectRatio: "6 / 1" }}
        >
          {"siklu".split("").map((char, i) => {
            return (
              <Tile
                key={i}
                char={char}
                state={char === "k" ? "wrong" : null}
                delay={0}
              />
            );
          })}
        </div>
        <div className="mb-4">
          La iha letra <strong>K</strong> iha liafuan segredu.
        </div>
        <hr className="border-gray-700 mb-4" />
        <p className="font-semibold">Sei iha liafuan foun loroloron!</p>
      </div>
    </Modal>
  );
}
