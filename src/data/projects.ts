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

export const projects = [pgsceSamorinhaProject] as const;

export type Project = (typeof projects)[number];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
