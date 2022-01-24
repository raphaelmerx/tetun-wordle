export function getCongratulationMessage(attempt: number) {
  switch (attempt) {
    case 0:
      return "Furak la halimar";
    case 1:
      return "Furak demais";
    case 2:
      return "Furak loos";
    case 3:
      return "Di'ak la halimar";
    case 4:
      return "Di'ak loos";
    default:
      return "Parabens";
  }
}
