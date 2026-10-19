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
      'In the summer of 2024 before starting at Georgia Tech as a Mechanical Engineer, I bought an aluminum Jon boat on Facebook marketplace along with some friends. It came with a broken 1964 Johnson 9.5 outboard motor. The motor was broken into all its different parts with the flywheel removed, the carburetor in half, and the lower unit fully disassembled. The marine mechanic at Lake Lanier said the motor was too old to be worth fixing. I took it upon myself to fix the motor. It was only sparking on one cylinder, so I removed the flywheel to investigate the vintage points and condensers ignition system. Cleaning the points got both cylinders back to flashing bright blue sparks. I bought a carburetor rebuild kit and replaced the old cork float and several gaskets. I identified all the missing parts of the fuel system such as the fuel filter and pump, and I put in fresh gas lines. Referencing online diagrams, I put the lower unit back together piece by piece. I replaced the old water pump and put the now fully assembled engine in a test tank. After lots of cranking on the recoil starter, I realized the carburetor was going to need some air-fuel mixture adjustments. An overly rich mixture was flooding the engine so leaning it out with some slight clockwise turns got the motor to fire right up.',
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
      'In the summer of 2025 I bought a 1977 Ebbtide Trihull boat. I wanted more room and more power than my Jon boat so I could pull my friends behind on water skis. The boat came with a 48 HP Johnson without a lower unit. I found a broken Johnson 40 HP on marketplace from a different year, but I presumed it to have the same lower unit. When I removed the lower unit and tried to fit it onto the 48 HP powerhead, it turned out to have a different driveshaft that made it impossible to install - this lower unit would require a full rebuild to replace the driveshaft with a part that was nearly obsolete and costed upwards of $200. I decided I would try to fix the broken 40 HP motor instead, which was missing spark on 1 of 2 cylinders. I took my multimeter and tested the OEM resistances and diagnosed the trigger as the culprit. After getting it installed, the motor ran but unbeknownst to me there was damage deep within the crankshaft bearings, evident by endplay in the crankshaft. After taking it out on the water for its first test run, the motor broke down on the river, leaving me and my friend stranded. After towing the boat back to the ramp and back to my house the next day, I tested compression and realized the motor overheated and was not worth saving - leaving me back at square one trying to get this lower unit on the working 1990 48 HP powerhead.',
      'On my trip to Maine with my girlfriend that summer, I explained my problem to her grandfather who had worked on outboards for his sailboat on Toddy Pond. Miraculously, he remembered taking apart a similar motor and looked through his stuff and found the exact part I needed. See the video below of me rebuilding the lower unit to replace the driveshaft.',
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
      'After having worked on two Johnson equivalent motors from this generation, I scanned Facebook marketplace for more of these motors where I could apply my expertise and make use of any leftover parts from the blown powerhead. Additionally, I wanted a power trim and tilt unit (PTT) to put on my boat to help me dredge through the shallow waters of the Chattahoochee River. Low and behold, I found a great deal for a 1991 Evinrude 40 HP in Opelika for only $150 with a PTT unit and throttle controls. Even though it was listed as a parts motor and I assumed it had internal damage, I took the hour and a half drive and picked up the motor. The previous owner described the symptoms and I took a compression test showing a healthy 120/120 PSI on both cylinders. After that breakthrough, I felt certain I could get it running with a simple carburetor clean and some small adjustments. After rebuilding both carburetors and adjusting the ignition timing and air-fuel mixture, I had the motor back to running like a top.',
      'However, the PTT unit was leaking down, meaning the hydraulic fluid was able to bypass the cylinder ram and preventing the unit from building pressure to lift anything. I bought a trim unit rebuild kit and replaced all the rubber O-rings and seals inside. After reassembly, the trim unit was able to lift the motor and cycle down without any issues. I transferred it to my boat, which previously had a non-working, non-serviceable hydraulic assist cylinder. I took the PTT relays from the blown 1996 Johnson 40 HP powerhead and wired it up to the new PTT unit.',
      'I sold the motor to a couple in Douglasville for $800 without PTT netting me a profit of $650 + a now working PTT unit.',
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
      "While I had the Evinrude 40 HP motor listed for sale on marketplace, one buyer offered to trade me his non-working motor and some extra cash. I didn't want to take on the unnecessary risk on a trade for an older motor that I possibly wouldn't be able to find parts for. I told him to bring his boat by and I would take a look at his motor and consider the trade. Spark and compression tests passed but the lower unit wouldn't shift into forward or reverse. Right there in my driveway, I cleaned the carburetors while walking him through the process. After reinstalling with some mixture screw adjustments, the motor ran well. Him and I agreed after already having achieved that, he probably wouldn't need the Evinrude at all. He trusted me to be his mechanic and we would reconvene the next day. That night, I did some research on the motor and found out it was a hydroelectric shift unit, meaning it used electric solenoids to actuate the clutch. The next day, by hooking up jumper cables to the leads from the lower unit, we were able to confirm it shifted into forward and reverse.",
    ],
    videos: [{ title: '1974 Johnson 50 HP', url: '' }],
  },
]
