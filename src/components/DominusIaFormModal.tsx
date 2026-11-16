import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface DominusIaFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DominusIaFormModal({
  open,
  onOpenChange,
}: DominusIaFormModalProps) {
  React.useEffect(() => {
    if (!open) return;

    const scriptId = "fullfunnel-form-embed-js";
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://links.fullfunnel.app/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [open]);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        {/* Overlay preto com transparência rgba(0,0,0,0.6) e fechamento ao clicar fora */}
        <DialogPrimitive.Overlay
          className="fixed inset-0 z-50 transition-opacity data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        />

        {/* Modal centralizado na tela, fundo branco, bordas arredondadas de 30px, largura máxima de 530px */}
        <DialogPrimitive.Content
          aria-describedby="dominus-ia-form-description"
          className="fixed left-1/2 top-1/2 z-50 flex w-[95vw] max-w-[530px] h-auto max-h-[95vh] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[30px] bg-white p-0 shadow-2xl focus:outline-none"
          style={{ borderRadius: "30px", backgroundColor: "#ffffff" }}
        >
          <DialogPrimitive.Title className="sr-only">
            Saber mais sobre o Dominus IA
          </DialogPrimitive.Title>
          <DialogPrimitive.Description id="dominus-ia-form-description" className="sr-only">
            Formulário oficial de contato do Dominus IA
          </DialogPrimitive.Description>

          {/* Botão de fechar (X) fixo no canto superior direito do modal */}
          <DialogPrimitive.Close
            aria-label="Fechar modal"
            className="absolute right-4 top-4 z-30 flex size-9 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-md transition-all hover:bg-white hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-400 border border-zinc-200/80 cursor-pointer"
          >
            <X size={18} aria-hidden="true" />
            <span className="sr-only">Fechar</span>
          </DialogPrimitive.Close>

          {/* Iframe ocupando 100% da largura, sem bordas e com cantos arredondados de 30px */}
          <div className="relative w-full h-full overflow-hidden bg-white rounded-[30px]">
            <iframe
              src="https://links.fullfunnel.app/widget/form/HGACtqwsc0e0LY05iGhn"
              id="inline-HGACtqwsc0e0LY05iGhn"
              title="Formulário Dominus IA"
              className="block w-full border-0"
              style={{
                width: "100%",
                height: "55vh",
                border: "none",
                borderRadius: "30px",
              }}
              scrolling="no"
            />
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
