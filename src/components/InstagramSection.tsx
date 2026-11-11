// Configure somente após a confirmação do perfil oficial da emissora.
export function InstagramSection({ profileUrl, handle }: { profileUrl?: string; handle?: string }) {
  if (!profileUrl || !handle) return null;
  return (
    <section className="py-20 text-center">
      <h2 className="font-display text-3xl font-bold">Siga a A7 Sertanejo Universitário FM</h2>
      <a
        className="mt-6 inline-block text-secondary"
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {handle}
      </a>
    </section>
  );
}
