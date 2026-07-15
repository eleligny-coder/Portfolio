import type { MediaSlot } from "@/data/projects";

const labels = {
  desktop: "Capture desktop",
  mobile: "Capture mobile",
  diagram: "Diagramme",
  document: "Document / PDF",
} as const;

export function MediaPlaceholder({ slot, index }: { slot: MediaSlot; index: number }) {
  return (
    <article className={`media-placeholder media-${slot.format}`}>
      <div className="media-placeholder-bar"><span>Slot {String(index + 1).padStart(2, "0")}</span><span>{labels[slot.format]}</span></div>
      <div className="media-placeholder-body">
        <div className="media-icon" aria-hidden="true">＋</div>
        <h3>{slot.title}</h3>
        <p>{slot.description}</p>
        <small>Emplacement réservé — le visuel sera ajouté sans modifier la structure.</small>
      </div>
    </article>
  );
}
