"""Approximation de pi (Monte-Carlo) — boîte noire (corrigé)."""
import random


def estimer_pi(n):
    """Estime pi par n tirages aléatoires dans le carré unité."""
    dedans = 0
    for _ in range(n):
        x, y = random.random(), random.random()
        if x * x + y * y <= 1:
            dedans += 1
    return 4 * dedans / n


if __name__ == "__main__":
    print(estimer_pi(100000))
