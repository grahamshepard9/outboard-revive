export type MotorVideo = {
  title: string
  /** Paste any YouTube link here (youtube.com/watch?v=..., youtu.be/..., or /shorts/...). Leave empty to show a placeholder. */
  url: string
}

export type Motor = {
  id: string
  year: string
  make: string
  hp: string
  tag?: string
  note?: string
  journal: string[]
  videos: MotorVideo[]
}

export const motors: Motor[] = [
  {
    id: 'johnson-9-5',
    year: '1964',
    make: 'Johnson',
    hp: '9.5 HP',
    journal: [
      'In the summer of 2024, before starting Mechanical Engineering at Georgia Tech, some friends and I bought an aluminum Jon boat on Facebook Marketplace. It came with a broken 1964 Johnson 9.5 outboard, and it was in pieces: the flywheel was off, the carburetor was split in half, and the lower unit was fully disassembled. The marine mechanic at Lake Lanier said the motor was too old to be worth fixing, so I took it on myself.',
      'It was only sparking on one cylinder, so I pulled the flywheel to get at the vintage points-and-condenser ignition system. Cleaning the points brought both cylinders back to bright blue spark.',
      'Next came the fuel system. I rebuilt the carburetor with a kit, replacing the old cork float and several gaskets. I tracked down every missing fuel system part, including the fuel filter and fuel pump, and ran fresh gas lines.',
      'Using online diagrams, I rebuilt the lower unit piece by piece, replaced the old water pump, and set the fully assembled engine in a test tank. After a lot of pulls on the recoil starter, it was clear the carburetor needed a mixture adjustment: it was running too rich and flooding the engine. Leaning it out with a few slight clockwise turns got the motor to fire right up.',
    ],
    videos: [{ title: '1964 Johnson 9.5 HP', url: '' }],
  },
  {
    id: 'johnson-48-40',
    year: '1990 + 1996',
    make: 'Johnson',
    hp: '48 HP + 40 HP',
    tag: 'My boat',
    note: 'Frankensteined the two motors together to put on my current boat.',
    journal: [
      'In the summer of 2025, I bought a 1977 Ebbtide Trihull. I wanted more room and more power than the Jon boat so I could pull my friends on water skis. The boat came with a 1990 Johnson 48 HP, but no lower unit.',
      'I found a broken Johnson 40 HP on Marketplace. It was a different year, but I assumed it shared the same lower unit. When I pulled the lower unit and tried to fit it to the 48 HP powerhead, the driveshaft turned out to be different, making it impossible to install. Making it fit would mean a full lower unit rebuild with a nearly obsolete driveshaft that cost upwards of $200.',
      'Instead, I decided to try fixing the broken 40 HP itself, which had no spark on one of its two cylinders. Using a multimeter, I checked the components against OEM resistance specs and diagnosed the trigger as the culprit. With a new trigger installed, the motor ran.',
      'What I didn\u2019t know was that there was damage deep in the crankshaft bearings, evident from endplay in the crankshaft. On its first test run, the motor broke down on the river and left my friend and me stranded. After towing the boat back to the ramp and getting it home, I ran a compression test the next day and found that the motor had overheated and wasn\u2019t worth saving. I was back at square one: getting this lower unit onto the working 1990 48 HP powerhead.',
      'That summer, on a trip to Maine with my girlfriend, I explained the problem to her grandfather, who had worked on the outboards for his sailboat on Toddy Pond. Miraculously, he remembered taking apart a similar motor, dug through his things, and found the exact part I needed. The video below shows me rebuilding the lower unit to replace the driveshaft.',
    ],
    videos: [{ title: 'Lower unit rebuild: driveshaft replacement', url: '' }],
  },
  {
    id: 'evinrude-40-flip',
    year: '1991',
    make: 'Evinrude',
    hp: '40 HP',
    tag: 'Flip',
    journal: [
      'After working on two equivalent Johnsons from this generation, I started scanning Facebook Marketplace for more of these motors, where I could put my experience and the leftover parts from the blown powerhead to use. I also wanted a power trim and tilt (PTT) unit for my boat to help me get through the shallow waters of the Chattahoochee River.',
      'Lo and behold, I found a 1991 Evinrude 40 HP in Opelika for only $150, complete with a PTT unit and throttle controls. It was listed as a parts motor and I assumed it had internal damage, but I made the hour-and-a-half drive and picked it up anyway.',
      'After hearing the previous owner describe the symptoms, I ran a compression test, which showed a healthy 120/120 PSI on both cylinders. That was the breakthrough: I was confident a carburetor cleaning and some small adjustments would get it running. After rebuilding both carburetors and adjusting the ignition timing and air-fuel mixture, the motor was running like a top.',
      'The PTT unit was another story. It was leaking down, meaning hydraulic fluid was bypassing the cylinder ram and the unit couldn\u2019t build enough pressure to lift anything. I bought a trim unit rebuild kit and replaced all of the rubber O-rings and seals inside. After reassembly, it lifted the motor and cycled back down without any issues.',
      'I moved the PTT unit to my own boat, which previously had a non-working, non-serviceable hydraulic assist cylinder. Then I took the PTT relays from the blown 1996 Johnson 40 HP powerhead and wired them up to the new unit.',
      'I sold the Evinrude, without the PTT, to a couple in Douglasville for $800. That netted a $650 profit plus a working PTT unit for my boat.',
    ],
    videos: [{ title: '1991 Evinrude 40 HP', url: '' }],
  },
  {
    id: 'johnson-50-customer',
    year: '1974',
    make: 'Johnson',
    hp: '50 HP',
    tag: 'Customer',
    journal: [
      'While the Evinrude was listed on Marketplace, one buyer offered to trade me his non-working motor plus some cash. I didn\u2019t want to take on the risk of trading for an older motor I might not be able to find parts for, so I told him to bring his boat by and I would take a look before deciding.',
      'Spark and compression tests both passed, but the lower unit wouldn\u2019t shift into forward or reverse. Right there in my driveway, I cleaned the carburetors while walking him through the process. After reinstalling them and adjusting the mixture screws, the motor ran well.',
      'Having gotten that far, we agreed he probably didn\u2019t need the Evinrude at all. He trusted me to be his mechanic, and we planned to pick it back up the next day.',
      'That night, I researched the motor and learned it used a hydro-electric shift system, where electric solenoids actuate the clutch. The next day, we hooked jumper cables up to the leads from the lower unit and confirmed it shifted into both forward and reverse.',
    ],
    videos: [{ title: '1974 Johnson 50 HP', url: '' }],
  },
]
