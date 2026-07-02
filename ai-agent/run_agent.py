"""
CLI para chatear con el agente en local y ver el "glass box".

Uso:
    python run_agent.py "cuanto cobras por un agente de IA"
    python run_agent.py            # modo interactivo (escribe 'salir' para terminar)

Muestra, ademas de la respuesta final, que herramientas uso el agente y con que
argumentos: esa transparencia es lo que luego enseñamos en el portafolio.
"""

import sys

from dotenv import load_dotenv

# La consola de Windows usa cp1252 por defecto y peta con emojis (p.ej. la ⭐ de
# los repos). Forzamos UTF-8 en la salida para que el CLI imprima sin errores.
try:
    sys.stdout.reconfigure(encoding="utf-8")
except (AttributeError, ValueError):
    pass

load_dotenv()

from agent.service import answer


def print_glass_box(steps, provider):
    print("\n  glass box  (modelo: " + provider + ")")
    if not steps:
        print("   - respuesta directa, sin herramientas")
    for step in steps:
        if step["type"] == "tool_call":
            print(f"   -> llama tool: {step['name']}({step['args']})")
        else:
            print(f"      resultado {step['name']}: {step['content'][:200]}...")
    print()


def main():
    one_shot = " ".join(sys.argv[1:]).strip()
    if one_shot:
        res = answer(one_shot)
        print("Respuesta:\n" + res["reply"])
        print_glass_box(res["steps"], res["provider"])
        return

    print("Agente listo. Escribe 'salir' para terminar.\n")
    history = []
    while True:
        try:
            user = input("Tu: ").strip()
        except (EOFError, KeyboardInterrupt):
            break
        if user.lower() in {"salir", "exit", "quit"}:
            break
        if not user:
            continue

        res = answer(user, history)
        print("\nAgente: " + res["reply"])
        print_glass_box(res["steps"], res["provider"])
        history.append({"role": "user", "content": user})
        history.append({"role": "assistant", "content": res["reply"]})


if __name__ == "__main__":
    main()
