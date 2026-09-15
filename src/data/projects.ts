import type { VideoSource } from 'expo-video';
import type { ImageSourcePropType } from 'react-native';

export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  highlights: readonly string[];
  howItWorks: string;
  demonstration?: string;
  engineeringNote?: string;
  technologies: readonly string[];
  hardware: readonly string[];
  images?: readonly { source: ImageSourcePropType; description: string }[];
  video?: VideoSource;
  repositoryUrl?: `https://github.com/${string}`;
};

export const pgsceSamorinhaProject = {
  id: 'pgsce-samorinha',
  title: 'DC Motor Control with ATmega128A',
  shortTitle: 'PGSCE Samorinha',
  description:
    'An embedded system for controlling the speed and direction of a DC motor, with physical controls and real-time feedback on a 16×2 LCD.',

  highlights: [
    'ATmega128A running at 8 MHz',
    'Fast PWM motor-speed control using Timer2',
    'L298N motor driver for direction control',
    'Six push buttons using external interrupts',
    '16×2 LCD operating in 4-bit mode',
    'Bare-metal C implementation',
  ],

  howItWorks:
    'The push buttons generate external interrupts that update control flags. The main loop processes those inputs, adjusts the PWM duty cycle, controls the motor direction through the L298N driver, and refreshes the LCD with the current speed and operating state.',

  demonstration:
    'The video demonstrates motor-speed adjustment, direction control, and real-time LCD feedback.',

  engineeringNote:
    'In this laboratory setup, LCD instability became visible above approximately 14% PWM duty cycle, likely due to electromagnetic interference and shared power or ground noise from the DC motor.',

  technologies: [
    'Bare-metal C',
    'ATmega128A',
    'Expo',
    'React Native',
    'TypeScript',
  ],

  hardware: [
    'ATmega128A microcontroller',
    'L298N dual motor driver',
    'DC motor',
    '16×2 character LCD',
    'Six push buttons',
    'USBasp programmer',
  ],

  images: [
    {
      source: require('../../assets/projects/pgsce-samorinha/project-view-1.jpg'),
      description:
        'ATmega128A development setup connected to the LCD and laboratory hardware.',
    },
    {
      source: require('../../assets/projects/pgsce-samorinha/project-view-2.jpg'),
      description:
        'Embedded motor-control circuit assembled on the laboratory workbench.',
    },
    {
      source: require('../../assets/projects/pgsce-samorinha/project-view-3.jpg'),
      description:
        'LCD displaying motor status while the embedded system is operating.',
    },
  ],

  video: require('../../assets/projects/pgsce-samorinha/isep-lab-demo.mp4'),
} as const;

export const dsiemPl5BlinkerProject = {
  id: 'dsiem-pl5-exercise-ii',
  title: 'PL5 Exercise II — Linux Kernel GPIO Blinker',
  shortTitle: 'DSIEM PL5 · Exercise II',
  description:
    'A C Linux kernel module for Raspberry Pi 4 that blinks an LED on GPIO12, with a configurable period exposed through /dev/blinker.',
  highlights: [
    'Raspberry Pi 4 running a loadable Linux kernel module written in C',
    'GPIO12 output controlled through memory-mapped GPIO registers',
    'timer_list callbacks toggle the LED using delays in jiffies',
    'Character-device read/write operations expose the blink period in milliseconds',
    'copy_to_user and copy_from_user transfer data across the user/kernel boundary',
    'Separate blinker_hr.c explores high-resolution timing with hrtimer',
  ],
  howItWorks:
    'Developed for Desenvolvimento de Sistemas Embebidos at ISEP, the module registers /dev/blinker and maps the Raspberry Pi 4 GPIO registers. A user-space write supplies the full blink period in milliseconds; the driver converts it into a half-period in kernel ticks (jiffies). Each timer_list callback toggles GPIO12 and schedules the next transition. Reading the device returns the configured period.',
  demonstration:
    'The repository reports LED behaviour as the hardware debugging evidence. The implementation demonstrates a configurable GPIO driver, periodic kernel callbacks, and user-space control through character-device file operations.',
  engineeringNote:
    'The Makefile builds blinker.c with gpio.c, using timer_list/jiffies. The separate blinker_hr.c demonstrates hrtimer and logical state changes, but does not drive GPIO and is not part of the default build.',
  technologies: ['C', 'Linux kernel module', 'GPIO', 'timer_list / jiffies', 'Character device'],
  hardware: ['Raspberry Pi 4', 'LED with a series resistor', 'GPIO12 (physical pin 32) and common GND'],
  repositoryUrl: 'https://github.com/abaltazapinto/rpi_lab_ISEP_pl5_exII',
} as const satisfies Project;

export const dsiemPl5PwmProject = {
  id: 'dsiem-pl5-exercise-iii',
  title: 'PL5 Exercise III — Software PWM Kernel Module',
  shortTitle: 'DSIEM PL5 · Exercise III',
  description:
    'A C Linux kernel module for Raspberry Pi 4 that generates nominal 1 kHz software PWM on GPIO12, with LED brightness controlled through /dev/dimmer.',
  highlights: [
    'Raspberry Pi 4 running software PWM in Linux kernel space',
    'hrtimer schedules the high and low phases of a nominal 1 ms PWM period',
    'GPIO12 driven directly through memory-mapped GPIO registers',
    '/dev/dimmer accepts duty-cycle values from 0 to 100 percent',
    'New duty-cycle settings are sampled at the start of each PWM period',
    'Explicit handling of 0% (off) and 100% (continuously on)',
  ],
  howItWorks:
    'Developed for Desenvolvimento de Sistemas Embebidos at ISEP, the module receives a duty-cycle setpoint through /dev/dimmer. The write handler copies and parses user-space input, rejecting values outside 0–100. At each new PWM period, the hrtimer callback samples the setpoint and drives GPIO12 high and low for the corresponding portions of a nominal 1 ms period. Reading the device returns the setpoint.',
  demonstration:
    'The photograph and video document the Raspberry Pi 4 LED hardware demonstration. They do not establish a specific duty cycle, measured PWM frequency, timing accuracy, or jitter.',
  engineeringNote:
    'The Makefile builds blinker_hr.c with gpio.c. The 1 kHz value is the nominal frequency derived from the programmed intervals; the repository does not provide measured timing accuracy or jitter results.',
  technologies: ['C', 'Linux kernel module', 'Software PWM', 'hrtimer', 'GPIO', 'Character device'],
  hardware: ['Raspberry Pi 4', 'LED with a series resistor', 'GPIO12 (physical pin 32) and common GND'],
  images: [
    {
      source: require('../../assets/projects/dsiem-pl5-exercise-iii/software-pwm-led-raspberry-pi-4.jpg'),
      description: 'Raspberry Pi 4 LED hardware setup for Exercise III.',
    },
  ],
  video: require('../../assets/projects/dsiem-pl5-exercise-iii/software-pwm-demo.mp4'),
  repositoryUrl: 'https://github.com/abaltazapinto/rpi_lab_ISEP_pl5_exIII',
} as const satisfies Project;

export const projects: readonly Project[] = [
  pgsceSamorinhaProject,
  dsiemPl5BlinkerProject,
  dsiemPl5PwmProject,
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
