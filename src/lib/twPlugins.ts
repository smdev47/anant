import plugin from "tailwindcss/plugin";

interface NeonUtility {
  [index: string]: Record<string, string>;
}

export const neonPlugin = plugin(({ theme, addUtilities }) => {
  const neonUtilities: NeonUtility = {};
  const colors = theme("colors");
  for (const color in colors) {
    if (typeof colors[color] === "object") {
      const brightColor = colors[color]["400"];
      const darkColor = colors[color]["700"];
      neonUtilities[`.neon-${color}`] = {
        boxShadow: `0 0 5px ${brightColor}, 0 0 20px ${darkColor}`,
      };
      neonUtilities[`.neon-inset-${color}`] = {
        boxShadow: `inset 0 0 5px ${brightColor}, inset 0 0 20px ${darkColor}`,
      };
    }
  }
  addUtilities(neonUtilities);
});


export const rotateZPlugin = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      rotateZ: (value) => {
        return {
          "--tw-rotateZ": value,
          transform: "rotateZ(var(--tw-rotateZ))",
        };
      },
    },
    {
      values: theme("rotate"),
    },
  );
});

export const addRotateAngle = plugin(({ addBase, addComponents }) => {
  let day = new Date();
  addBase({
    ":root": {
      "--tw-rotate-hour": `${Math.floor(
        day.getHours() * 30 + day.getMinutes() / 12,
      )}deg`,
      "--tw-rotate-min": `${day.getMinutes() * 6}deg`,
      "--tw-rotate-sec": ``,
    },
  });
  addComponents({
    ".rotateHour": {
      transform: "rotateZ(var(--tw-rotate-hour))",
    },
    ".rotateMin": {
      transform: "rotateZ(var(--tw-rotate-min))",
    },
    ".rotateSec": {
      transform: "rotateZ(var(--tw-rotate-sec))",
    },
  });
});
