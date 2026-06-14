import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bath,
  BatteryCharging,
  BellRing,
  Bolt,
  Building2,
  Cable,
  CheckCircle2,
  CircuitBoard,
  ClipboardCheck,
  Clock,
  Camera,
  Car,
  Fan,
  Flame,
  FileText,
  FileCheck2,
  Gauge,
  Home,
  HousePlus,
  HousePlug,
  LampCeiling,
  Lightbulb,
  Factory,
  MessageCircle,
  Monitor,
  Network,
  PanelTop,
  PanelsTopLeft,
  Phone,
  Plug,
  PlugZap,
  Power,
  Route as RouteIcon,
  SearchCheck,
  ShieldCheck,
  Siren,
  Snowflake,
  Sparkles,
  Sun,
  SunMedium,
  Thermometer,
  ToggleLeft,
  Trees,
  Unplug,
  Users,
  UtilityPole,
  Wrench,
  Wifi,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ElectricSectionTag } from "@/components/ElectricSectionTag";
import { Button } from "@/components/ui/button";
import residentialImage from "@/assets/residential.jpg";
import tsbcLogo from "@/assets/TSBC_Logo_Gear_White.png";

export const Route = createFileRoute("/residential-services-sample-clone")({
  head: () => ({
    meta: [
      {
        title:
          "Residential Electrical Services Clone — Redesigned Home Electrician Services | GK Electric",
      },
      {
        name: "description",
        content:
          "A redesigned clone of the GK Electric residential services sample page with categorized home electrical services, service-wise icons, animations, effects and clear calls to action.",
      },
      {
        property: "og:title",
        content: "Residential Electrical Services Clone | GK Electric",
      },
      {
        property: "og:description",
        content:
          "Redesigned residential electrical services page for repairs, renovations, panels, wiring, lighting, EV chargers, safety inspections and code-compliant home upgrades.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResidentialServicesSampleClonePage,
});

type ServiceCategory = {
  icon: LucideIcon;
  title: string;
  description: string;
  services: string[];
  accent: string;
  soft: string;
};

const residentialServices: ServiceCategory[] = [
  {
    icon: Home,
    title: "New Construction Electrical",
    description:
      "Complete electrical planning, rough-in and finishing for new custom homes, laneway homes and residential builds.",
    accent: "from-amber-400 to-yellow-500",
    soft: "bg-amber-500/10 text-amber-600",
    services: [
      "New Home Electrical Layout and Planning",
      "Service Entrance and Main Panel Installation",
      "Full Rough-In Wiring for Every Room",
      "Lighting, Switch and Outlet Placement",
      "Dedicated Circuits for Kitchens, Laundry and Mechanical Rooms",
      "Smart Home and Low-Voltage Wiring Preparation",
      "Garage, Exterior and Landscape Power Installation",
      "Permits, Inspections and Final Electrical Completion",
    ],
  },
  {
    icon: PanelTop,
    title: "Panels, Breakers & Service Upgrades",
    description:
      "Main panel improvements, breaker safety, capacity planning and power upgrades for modern homes.",
    accent: "from-yellow-300 to-amber-500",
    soft: "bg-yellow-500/10 text-yellow-700",
    services: [
      "100A to 200A Electrical Service Upgrades",
      "Main Electrical Panel Replacement",
      "Subpanel Installation for Suites, Garages and Workshops",
      "Breaker Replacement and Circuit Balancing",
      "AFCI and GFCI Breaker Upgrades",
      "Dedicated Circuits for Appliances and Equipment",
      "Load Calculations and Capacity Assessments",
      "Meter Base and Service Equipment Coordination",
    ],
  },
  {
    icon: Cable,
    title: "Home Wiring, Rewiring & Suites",
    description:
      "Clean, code-compliant wiring for older homes, additions, renovations, basement suites and secondary suites.",
    accent: "from-blue-400 to-cyan-500",
    soft: "bg-blue-500/10 text-blue-600",
    services: [
      "Whole-Home and Partial Rewiring",
      "Knob-and-Tube and Aluminum Wiring Correction",
      "Basement Suites and Secondary Suite Wiring",
      "Suite Subpanels and Dedicated Circuits",
      "Basement, Garage and Laneway Home Wiring",
      "Kitchen and Bathroom Renovation Wiring",
      "Home Addition Electrical Wiring",
      "Low-Voltage, Data and Network Cabling",
      "Permit-Ready Wiring Documentation",
    ],
  },
  {
    icon: LampCeiling,
    title: "Lighting Design & Installation",
    description:
      "Interior, exterior, feature and security lighting designed to make homes brighter, safer and efficient.",
    accent: "from-orange-400 to-rose-500",
    soft: "bg-orange-500/10 text-orange-600",
    services: [
      "Pot Light and Recessed Lighting Installation",
      "LED Lighting Upgrades and Retrofits",
      "Chandeliers, Pendants and Ceiling Fixtures",
      "Under-Cabinet and Toe-Kick Lighting",
      "Landscape and Pathway Lighting",
      "Motion Sensor and Security Lighting",
      "Dimmers, Lighting Zones and Scene Controls",
      "Lighting Troubleshooting and Repairs",
    ],
  },
  {
    icon: Plug,
    title: "Outlets, Switches, Circuits & Appliances",
    description:
      "Everyday electrical upgrades that improve convenience, appliance performance, safety and usable power throughout the home.",
    accent: "from-violet-400 to-purple-600",
    soft: "bg-violet-500/10 text-violet-600",
    services: [
      "Outlet Repair and Replacement",
      "New Outlet and Switch Installation",
      "USB, Smart and Tamper-Resistant Outlets",
      "GFCI Outlet Installation for Wet Areas",
      "AFCI Protection for Living Areas and Bedrooms",
      "Dedicated Appliance Circuits",
      "Range, Oven and Cooktop Electrical Connections",
      "Dishwasher and Laundry Electrical Connections",
      "Troubleshooting Outlets and Circuit Issues",
    ],
  },
  {
    icon: Snowflake,
    title: "HVAC & Heating Electrical",
    description:
      "Dedicated electrical connections and controls for home comfort systems, heating equipment and ventilation upgrades.",
    accent: "from-cyan-400 to-blue-600",
    soft: "bg-cyan-500/10 text-cyan-600",
    services: [
      "Heat Pump Electrical Circuits",
      "Air Conditioning and HVAC Wiring",
      "Electric Heating and Baseboard Circuits",
      "Thermostat and Control Wiring",
      "Bathroom and Exhaust Fan Wiring",
      "Dedicated Mechanical Room Circuits",
      "Outdoor Disconnects and Equipment Connections",
      "Load Review for Heating and Cooling Upgrades",
    ],
  },
  {
    icon: Fan,
    title: "Ceiling Fans & Ventilation",
    description:
      "Safe wiring, controls and installation support for ceiling fans, exhaust fans and ventilation equipment.",
    accent: "from-sky-400 to-indigo-500",
    soft: "bg-sky-500/10 text-sky-600",
    services: [
      "Ceiling Fan Wiring and Installation Support",
      "Fan-Rated Electrical Box Installation",
      "Separate Fan and Light Switch Controls",
      "Bathroom Exhaust Fan Wiring",
      "Kitchen and Laundry Ventilation Wiring",
      "Smart Fan Controls and Timers",
      "Troubleshooting Fan Wiring and Operation Issues",
      "Ventilation Wiring for Renovations and Suites",
    ],
  },
  {
    icon: BatteryCharging,
    title: "EV Chargers & Future-Ready Power",
    description:
      "Home charging solutions with panel checks, dedicated circuits and safe Level 2 installation.",
    accent: "from-emerald-400 to-green-600",
    soft: "bg-emerald-500/10 text-emerald-600",
    services: [
      "Level 2 EV Charger Installation",
      "Garage and Driveway Charging Circuits",
      "Hardwired and Plug-in Charger Setup",
      "EV Load Management Solutions",
      "Panel Capacity Check for EV Chargers",
      "Conduit and Weather-Rated Charger Protection",
      "EV Charger Brand Compatibility Setup",
      "Permit and Inspection Coordination for EV Charging",
    ],
  },
  {
    icon: Sun,
    title: "Solar & Energy Storage Preparation",
    description:
      "Future-ready electrical preparation for solar readiness, battery storage, energy monitoring and backup power planning.",
    accent: "from-orange-300 to-amber-500",
    soft: "bg-amber-500/10 text-amber-600",
    services: [
      "Solar-Ready Electrical Conduit Installation",
      "Solar Panel Capacity Review and Planning",
      "Battery Storage Readiness Planning",
      "Critical Load Panel Preparation",
      "Energy Monitoring System Connections",
      "Inverter and Disconnect Location Planning",
      "Future Equipment Wiring Provisions",
      "Coordination with Solar Installers",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Safety, Detectors & Protection",
    description:
      "Protection systems that help prevent shocks, fire risks, surge damage and code issues.",
    accent: "from-red-400 to-orange-500",
    soft: "bg-red-500/10 text-red-600",
    services: [
      "Smoke Detector Installation and Replacement",
      "Carbon Monoxide Detector Installation",
      "Hardwired Detector Interconnection",
      "Whole-Home Surge Protection",
      "Grounding and Bonding Repairs",
      "Electrical Safety Inspections",
      "Child-Safe and Tamper-Resistant Upgrades",
      "Code Deficiency Repairs",
    ],
  },
  {
    icon: Wifi,
    title: "Smart Home & Controls",
    description:
      "Modern controls for lighting, comfort, security and connected-home convenience.",
    accent: "from-indigo-400 to-violet-600",
    soft: "bg-indigo-500/10 text-indigo-600",
    services: [
      "Smart Switch and Dimmer Installation",
      "Smart Thermostat and Doorbell Wiring",
      "Security Camera and Low-Voltage Wiring",
      "Automated Lighting Control Systems",
      "Occupancy and Vacancy Sensor Installation",
      "Wi-Fi Controlled Outdoor Lighting",
      "Home Office Power and Data Upgrades",
      "Structured Media and Network Panel Installation",
    ],
  },
  {
    icon: Trees,
    title: "Outdoor, Garage & Specialty Power",
    description:
      "Weather-rated electrical systems for outdoor living, detached buildings and specialty equipment.",
    accent: "from-lime-400 to-emerald-600",
    soft: "bg-lime-500/10 text-lime-700",
    services: [
      "Outdoor Outlets and Weatherproof Covers",
      "Garage and Workshop Power Upgrades",
      "Shed and Detached Building Wiring",
      "Hot Tub and Spa Electrical Connections",
      "Pool Equipment Bonding and Power",
      "Patio, Deck and Pergola Lighting",
      "Gate, Pump and Exterior Equipment Circuits",
      "Seasonal Outdoor Power Outlets",
    ],
  },
  {
    icon: Wrench,
    title: "Repairs, Troubleshooting & Emergency Work",
    description:
      "Fast diagnostics and practical repairs when something is unsafe, unreliable or not working.",
    accent: "from-slate-400 to-slate-700",
    soft: "bg-slate-500/10 text-slate-600",
    services: [
      "Breaker Trips and Overload Troubleshooting",
      "Burning Smell, Buzzing or Warm Devices",
      "Power Loss and Partial Outage Diagnostics",
      "Flickering Light Repairs",
      "Faulty Switches, Outlets and Fixtures",
      "Electrical Code Correction Repairs",
      "Emergency Electrical Repair Service",
      "Pre-Sale and Inspection Repair Solutions",
    ],
  },
  {
    icon: Gauge,
    title: "Backup Power & Energy Efficiency",
    description:
      "Reliable backup and efficient electrical upgrades to support comfort, savings and resilience.",
    accent: "from-teal-400 to-cyan-600",
    soft: "bg-teal-500/10 text-teal-600",
    services: [
      "Portable Generator Transfer Switch Installation",
      "Standby Generator Electrical Connections",
      "Generator Interlock and Inlet Wiring",
      "Energy-Efficient LED Lighting Conversions",
      "Timer and Photocell Lighting Controls",
      "Load Shedding and Power Management Systems",
      "High-Consumption Circuit Review",
      "Electrical Planning for Heat Pumps and Appliances",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Permits, Inspections & Code Compliance",
    description:
      "Professional support for safe, documented and inspection-ready residential electrical work.",
    accent: "from-yellow-300 to-amber-500",
    soft: "bg-yellow-500/10 text-yellow-700",
    services: [
      "Residential Electrical Permit Coordination",
      "Inspection Preparation and Deficiency Correction",
      "Renovation and Suite Compliance Support",
      "Electrical Safety Reports",
      "Insurance and Real Estate Electrical Documentation",
      "Code-Compliant Installation Planning",
      "Utility Coordination Support",
      "Final Testing and Homeowner Walkthroughs",
    ],
  },
  {
    icon: Bath,
    title: "Kitchen, Bathroom & Renovation Electrical",
    description:
      "Detailed renovation electrical work for the highest-use rooms in the home.",
    accent: "from-fuchsia-400 to-pink-600",
    soft: "bg-fuchsia-500/10 text-fuchsia-600",
    services: [
      "Kitchen Appliance Circuits",
      "Bathroom Fan and Vanity Lighting Wiring",
      "Island, Pantry and Cabinet Power",
      "Heated Floor Electrical Connections",
      "Range, Cooktop and Wall Oven Circuits",
      "Microwave, Dishwasher and Garburator Wiring",
      "Renovation Rough-In and Final Device Installation",
      "Contractor-Friendly Scheduling and Coordination",
    ],
  },
];

const highlights = [
  { icon: Clock, label: "Fast Scheduling", value: "Quick response for home electrical needs" },
  { icon: ShieldCheck, label: "Code Compliant", value: "Safety-first work with proper protection" },
  { icon: Home, label: "Complete Homes", value: "Small repairs to full home rewiring" },
  { icon: Sparkles, label: "Clean Finish", value: "Tidy workmanship and polished details" },
];

const process = [
  { icon: Phone, title: "Discuss", text: "Tell us what is not working, what you want upgraded, or what your build requires." },
  { icon: ClipboardCheck, title: "Plan", text: "We review load, safety, permits, device locations, future needs and code requirements." },
  { icon: Wrench, title: "Install", text: "Our electricians complete tidy, protected, code-compliant work with the right materials." },
  { icon: ShieldCheck, title: "Verify", text: "We test, label, clean up and walk through the completed electrical work with you." },
];

const faqs = [
  {
    q: "What residential electrical work is included?",
    a: "Panels, wiring, lighting, outlets, EV chargers, detectors, surge protection, smart controls, outdoor power, generators, inspections, troubleshooting, new construction wiring, suites, HVAC connections and appliance circuits.",
  },
  {
    q: "Do residential projects need permits?",
    a: "Many panel, service, renovation, suite, EV charger and new circuit projects require permits and inspections. We help identify what is required before work begins.",
  },
  {
    q: "Can this page be used for small repairs and major upgrades?",
    a: "Yes. This clone keeps the broad residential service coverage while redesigning the layout so homeowners can quickly find both repair and full-installation services.",
  },
];

function getServiceCardIcon(service: string, categoryTitle: string): LucideIcon {
  const text = `${service} ${categoryTitle}`.toLowerCase();

  const exactIcons: Record<string, LucideIcon> = {
    "New home electrical layout and planning": ClipboardCheck,
    "Service entrance and main panel installation": PanelsTopLeft,
    "Full rough-in wiring for every room": Cable,
    "Lighting, switch and outlet placement": LampCeiling,
    "Dedicated circuits for kitchens, laundry and mechanical rooms": CircuitBoard,
    "Smart home and low-voltage wiring preparation": Network,
    "Garage, exterior, and landscape power provisions": HousePlug,
    "Permit, inspection, and final finishing coordination": FileCheck2,
    "100A to 200A Electrical Service Upgrades": Gauge,
    "100A to 200A service upgrades": Gauge,
    "Main Electrical Panel Replacement": PanelsTopLeft,
    "Main electrical panel replacement": PanelsTopLeft,
    "Subpanel Installation for Suites, Garages and Workshops": PanelTop,
    "Subpanel installation for suites, garages and workshops": PanelTop,
    "Breaker Replacement and Circuit Balancing": CircuitBoard,
    "Breaker replacement and circuit balancing": CircuitBoard,
    "AFCI and GFCI Breaker Upgrades": ShieldCheck,
    "AFCI and GFCI breaker upgrades": ShieldCheck,
    "Dedicated Circuits for Appliances and Equipment": PlugZap,
    "Load Calculations and Capacity Assessments": Gauge,
    "Meter Base and Service Equipment Coordination": UtilityPole,
    "Meter base and service equipment coordination": UtilityPole,
    "Whole-Home and Partial Rewiring": Cable,
    "Knob-and-Tube and Aluminum Wiring Correction": Cable,
    "Knob-and-tube and aluminum wiring corrections": Cable,
    "Basement Suites and Secondary Suite Wiring": HousePlug,
    "Suite Subpanels and Dedicated Circuits": PanelTop,
    "Suite subpanels, separation and dedicated circuits": PanelTop,
    "Basement, Garage and Laneway Home Wiring": HousePlus,
    "Basement, garage and laneway home wiring": HousePlus,
    "Kitchen and Bathroom Renovation Wiring": Bath,
    "Kitchen and bathroom renovation wiring": Bath,
    "Home Addition Electrical Wiring": HousePlus,
    "Low-Voltage, Data and Network Cabling": Network,
    "Low-voltage, data, TV and network cabling": Network,
    "Permit-Ready Wiring Documentation": FileCheck2,
    "Pot Light and Recessed Lighting Installation": LampCeiling,
    "LED Lighting Upgrades and Retrofits": Lightbulb,
    "Chandeliers, Pendants and Ceiling Fixtures": LampCeiling,
    "Under-Cabinet and Toe-Kick Lighting": Lightbulb,
    "Landscape and Pathway Lighting": Trees,
    "Motion Sensor and Security Lighting": Siren,
    "Dimmers, Lighting Zones and Scene Controls": ToggleLeft,
    "Lighting Troubleshooting and Repairs": SearchCheck,
    "Outlet Repair and Replacement": Plug,
    "New Outlet and Switch Installation": ToggleLeft,
    "USB, Smart and Tamper-Resistant Outlets": Plug,
    "GFCI Outlet Installation for Wet Areas": ShieldCheck,
    "AFCI Protection for Living Areas and Bedrooms": ShieldCheck,
    "Dedicated Appliance Circuits": CircuitBoard,
    "Range, Oven and Cooktop Electrical Connections": Flame,
    "Dishwasher and Laundry Electrical Connections": PlugZap,
    "Troubleshooting Outlets and Circuit Issues": SearchCheck,
    "Heat Pump Electrical Circuits": Thermometer,
    "Air Conditioning and HVAC Wiring": Snowflake,
    "Electric Heating and Baseboard Circuits": Flame,
    "Thermostat and Control Wiring": Thermometer,
    "Bathroom and Exhaust Fan Wiring": Fan,
    "Dedicated Mechanical Room Circuits": CircuitBoard,
    "Outdoor Disconnects and Equipment Connections": Unplug,
    "Load Review for Heating and Cooling Upgrades": Gauge,
    "USB, smart and tamper-resistant outlets": Plug,
    "Dishwasher, garburator, microwave and laundry circuit connections": PlugZap,
    "Heat pump electrical circuits": Thermometer,
    "Air conditioning and HVAC equipment wiring": Snowflake,
    "Electric furnace and baseboard heating circuits": Flame,
    "Thermostat and control wiring": Thermometer,
    "Disconnects and outdoor-rated equipment connections": Unplug,
    "Ceiling Fan Wiring and Installation Support": Fan,
    "Fan-Rated Electrical Box Installation": Fan,
    "Separate Fan and Light Switch Controls": ToggleLeft,
    "Bathroom Exhaust Fan Wiring": Fan,
    "Kitchen and Laundry Ventilation Wiring": Fan,
    "Smart Fan Controls and Timers": Clock,
    "Troubleshooting Fan Wiring and Operation Issues": SearchCheck,
    "Ventilation Wiring for Renovations and Suites": Cable,
    "Level 2 EV Charger Installation": BatteryCharging,
    "Garage and Driveway Charging Circuits": Car,
    "Hardwired and Plug-in Charger Setup": PlugZap,
    "EV Load Management Solutions": Gauge,
    "Panel Capacity Check for EV Chargers": PanelTop,
    "Conduit and Weather-Rated Charger Protection": ShieldCheck,
    "EV Charger Brand Compatibility Setup": PlugZap,
    "Permit and Inspection Coordination for EV Charging": ClipboardCheck,
    "Solar-Ready Electrical Conduit Installation": SunMedium,
    "Solar Panel Capacity Review and Planning": Gauge,
    "Battery Storage Readiness Planning": BatteryCharging,
    "Critical Load Panel Preparation": PanelTop,
    "Energy Monitoring System Connections": Gauge,
    "Inverter and disconnect location planning": Unplug,
    "Inverter and Disconnect Location Planning": Unplug,
    "Future Equipment Wiring Provisions": Cable,
    "Coordination with Solar Installers": Users,
    "Smoke Detector Installation and Replacement": Siren,
    "Smoke detector installation and replacement": Siren,
    "Carbon Monoxide Detector Installation": BellRing,
    "Carbon monoxide detector installation": BellRing,
    "Hardwired Detector Interconnection": Cable,
    "Hardwired detector interconnection": Cable,
    "Whole-Home Surge Protection": ShieldCheck,
    "Whole-home surge protection": ShieldCheck,
    "Grounding and Bonding Repairs": ShieldCheck,
    "Grounding and bonding corrections": ShieldCheck,
    "Electrical Safety Inspections": SearchCheck,
    "Electrical safety inspections": SearchCheck,
    "Child-Safe and Tamper-Resistant Upgrades": ShieldCheck,
    "Child-safe and tamper-resistant device upgrades": ShieldCheck,
    "Code Deficiency Repairs": FileCheck2,
    "Code deficiency repairs": FileCheck2,
    "Smart Switch and Dimmer Installation": ToggleLeft,
    "Smart switches and smart dimmers": ToggleLeft,
    "Smart Thermostat and Doorbell Wiring": Thermometer,
    "Smart thermostats and doorbell wiring": Thermometer,
    "Security Camera and Low-Voltage Wiring": Camera,
    "Security camera and low-voltage wiring": Camera,
    "Automated Lighting Control Systems": Wifi,
    "Automated lighting controls": Wifi,
    "Occupancy and Vacancy Sensor Installation": Siren,
    "Occupancy and vacancy sensors": Siren,
    "Wi-Fi Controlled Outdoor Lighting": Wifi,
    "Home Office Power and Data Upgrades": Monitor,
    "Home office power and data upgrades": Monitor,
    "Structured Media and Network Panel Installation": Network,
    "Structured media and network panels": Network,
    "Outdoor Outlets and Weatherproof Covers": Plug,
    "Outdoor outlets and weatherproof covers": Plug,
    "Garage and Workshop Power Upgrades": Power,
    "Garage and workshop power upgrades": Power,
    "Shed and Detached Building Wiring": HousePlug,
    "Shed and detached building wiring": HousePlug,
    "Hot Tub and Spa Electrical Connections": Bath,
    "Hot tub and spa electrical connections": Bath,
    "Pool Equipment Bonding and Power": Trees,
    "Pool equipment bonding and power": Trees,
    "Patio, Deck and Pergola Lighting": LampCeiling,
    "Gate, Pump and Exterior Equipment Circuits": Power,
    "Gate, pump and exterior equipment circuits": Power,
    "Seasonal Outdoor Power Outlets": Plug,
    "Breaker Trips and Overload Troubleshooting": CircuitBoard,
    "Burning Smell, Buzzing or Warm Devices": Flame,
    "Power Loss and Partial Outage Diagnostics": Power,
    "Flickering Light Repairs": Lightbulb,
    "Faulty Switches, Outlets and Fixtures": ToggleLeft,
    "Electrical Code Correction Repairs": FileCheck2,
    "Emergency Electrical Repair Service": Siren,
    "Pre-Sale and Inspection Repair Solutions": SearchCheck,
    "Portable generator transfer switch installation": BatteryCharging,
    "Portable Generator Transfer Switch Installation": BatteryCharging,
    "Standby generator electrical connections": BatteryCharging,
    "Standby Generator Electrical Connections": BatteryCharging,
    "Interlock kit and inlet wiring where permitted": PlugZap,
    "Generator Interlock and Inlet Wiring": PlugZap,
    "Energy-Efficient LED Lighting Conversions": Lightbulb,
    "Timer and Photocell Lighting Controls": Clock,
    "Load Shedding and Power Management Systems": Gauge,
    "High-Consumption Circuit Review": Gauge,
    "Electrical Planning for Heat Pumps and Appliances": Thermometer,
    "Timer and photocell controls": Clock,
    "Residential electrical permits": ClipboardCheck,
    "Residential Electrical Permit Coordination": ClipboardCheck,
    "Inspection preparation and deficiency correction": SearchCheck,
    "Inspection Preparation and Deficiency Correction": SearchCheck,
    "Renovation and Suite Compliance Support": HousePlus,
    "Electrical safety reports": FileText,
    "Electrical Safety Reports": FileText,
    "Insurance and real-estate repair documentation": FileText,
    "Insurance and Real Estate Electrical Documentation": FileText,
    "Code-Compliant Installation Planning": ClipboardCheck,
    "Utility Coordination Support": UtilityPole,
    "Final testing and homeowner walkthroughs": CheckCircle2,
    "Final Testing and Homeowner Walkthroughs": CheckCircle2,
    "Kitchen appliance circuits": PlugZap,
    "Kitchen Appliance Circuits": PlugZap,
    "Bathroom fan and vanity lighting wiring": Bath,
    "Bathroom Fan and Vanity Lighting Wiring": Fan,
    "Island, pantry and cabinet power": Plug,
    "Island, Pantry and Cabinet Power": Plug,
    "Heated floor electrical connections": Thermometer,
    "Heated Floor Electrical Connections": Thermometer,
    "Range, cooktop and wall oven circuits": PlugZap,
    "Range, Cooktop and Wall Oven Circuits": Flame,
    "Microwave, Dishwasher and Garburator Wiring": PlugZap,
    "Renovation Rough-In and Final Device Installation": Cable,
    "Contractor-friendly scheduling and coordination": Clock,
    "Contractor-Friendly Scheduling and Coordination": Clock,
  };

  if (exactIcons[service]) return exactIcons[service];

  if (text.includes("ev") || text.includes("charger") || text.includes("tesla") || text.includes("chargepoint")) return BatteryCharging;
  if (text.includes("panel") || text.includes("breaker") || text.includes("meter") || text.includes("service entrance") || text.includes("service upgrade")) return PanelTop;
  if (text.includes("load") || text.includes("capacity") || text.includes("power management") || text.includes("load shedding")) return Gauge;
  if (text.includes("wiring") || text.includes("rewiring") || text.includes("rough-in") || text.includes("cabling") || text.includes("conduit") || text.includes("low-voltage")) return Cable;
  if (text.includes("light") || text.includes("chandelier") || text.includes("pendant") || text.includes("fixture") || text.includes("dimmer") || text.includes("photocell")) return LampCeiling;
  if (text.includes("led") || text.includes("scene") || text.includes("motion sensor") || text.includes("occupancy") || text.includes("vacancy")) return Lightbulb;
  if (text.includes("outlet") || text.includes("switch") || text.includes("gfi") || text.includes("gfci") || text.includes("afci") || text.includes("usb") || text.includes("plug")) return Plug;
  if (text.includes("appliance") || text.includes("range") || text.includes("oven") || text.includes("cooktop") || text.includes("dishwasher") || text.includes("microwave") || text.includes("laundry") || text.includes("garburator")) return Plug;
  if (text.includes("heat pump") || text.includes("air conditioning") || text.includes("hvac") || text.includes("furnace") || text.includes("baseboard") || text.includes("thermostat") || text.includes("heating") || text.includes("cooling")) return Thermometer;
  if (text.includes("fan") || text.includes("exhaust") || text.includes("ventilation") || text.includes("humidity")) return Fan;
  if (text.includes("smoke") || text.includes("carbon monoxide") || text.includes("detector") || text.includes("emergency")) return Siren;
  if (text.includes("surge") || text.includes("grounding") || text.includes("bonding") || text.includes("tamper") || text.includes("child-safe") || text.includes("safety")) return ShieldCheck;
  if (text.includes("solar") || text.includes("inverter") || text.includes("battery storage") || text.includes("energy monitoring")) return Sun;
  if (text.includes("smart") || text.includes("wi-fi") || text.includes("wifi") || text.includes("automated") || text.includes("thermostat")) return Wifi;
  if (text.includes("camera") || text.includes("doorbell") || text.includes("security")) return Camera;
  if (text.includes("network") || text.includes("data") || text.includes("media") || text.includes("structured")) return CircuitBoard;
  if (text.includes("outdoor") || text.includes("landscape") || text.includes("pathway") || text.includes("patio") || text.includes("deck") || text.includes("pergola") || text.includes("garage") || text.includes("shed") || text.includes("pool") || text.includes("hot tub") || text.includes("spa") || text.includes("gate") || text.includes("pump") || text.includes("seasonal")) return Trees;
  if (text.includes("generator") || text.includes("transfer switch") || text.includes("interlock") || text.includes("inlet") || text.includes("backup")) return BatteryCharging;
  if (text.includes("permit") || text.includes("inspection") || text.includes("documentation") || text.includes("reports") || text.includes("insurance") || text.includes("real-estate") || text.includes("code")) return FileText;
  if (text.includes("troubleshooting") || text.includes("diagnostic") || text.includes("tripping") || text.includes("burning") || text.includes("buzzing") || text.includes("power loss") || text.includes("outage") || text.includes("flickering") || text.includes("faulty") || text.includes("dead")) return SearchCheck;
  if (text.includes("kitchen") || text.includes("bathroom") || text.includes("renovation") || text.includes("island") || text.includes("heated floor") || text.includes("vanity")) return Bath;
  if (text.includes("new home") || text.includes("laneway") || text.includes("custom home") || text.includes("home addition")) return Home;

  return Wrench;
}

function getServiceCardSummary(service: string, categoryTitle: string): string {
  const text = `${service} ${categoryTitle}`.toLowerCase();

  const exactSummaries: Record<string, string> = {
    "New Home Electrical Layout and Planning": "Room-by-room electrical planning for switches, outlets, and lighting to create a safe, efficient, and future-ready home.",
    "Service Entrance and Main Panel Installation": "Electrical service and main panel installation sized for your home's power needs and inspection-ready compliance.",
    "Full Rough-In Wiring for Every Room": "Complete rough-in wiring throughout the home to provide safe, reliable power before drywall and finishing work.",
    "Lighting, Switch and Outlet Placement": "Strategic placement of lighting, switches, and outlets for convenience, functionality, and everyday living.",
    "Dedicated Circuits for Kitchens, Laundry and Mechanical Rooms": "Dedicated circuits for high-demand appliances to improve safety, performance, and electrical reliability.",
    "Smart Home and Low-Voltage Wiring Preparation": "Pre-wiring for smart home technology, internet, media systems, security devices, and future automation upgrades.",
    "Garage, Exterior and Landscape Power Installation": "Electrical wiring for garages, outdoor lighting, landscape features, and future equipment or power needs.",
    "Permits, Inspections and Final Electrical Completion": "Permit coordination, inspections, and final electrical installation managed from rough-in to project completion.",
    "100A to 200A Electrical Service Upgrades": "Upgrade your home's electrical capacity to support EV chargers, heat pumps, suites, and modern appliances.",
    "Main Electrical Panel Replacement": "Replace outdated electrical panels with safer, organized distribution and capacity for future circuit additions.",
    "Subpanel Installation for Suites, Garages and Workshops": "Add dedicated power distribution for secondary spaces, equipment, and future electrical expansion needs.",
    "Breaker Replacement and Circuit Balancing": "Replace faulty breakers and balance electrical loads to improve safety, reliability, and panel performance.",
    "AFCI and GFCI Breaker Upgrades": "Install modern breaker protection to reduce shock hazards and help prevent electrical fire risks.",
    "Dedicated Circuits for Appliances and Equipment": "Dedicated circuits provide reliable power for appliances and equipment while reducing overload risks.",
    "Load Calculations and Capacity Assessments": "Evaluate electrical demand to ensure your system can safely support renovations and new equipment.",
    "Meter Base and Service Equipment Coordination": "Coordinate service equipment upgrades to meet utility requirements and ensure a smooth installation process.",
    "Whole-Home and Partial Rewiring": "Replacement of outdated wiring in selected areas or entire homes for improved safety, reliability, and code compliance.",
    "Knob-and-Tube and Aluminum Wiring Correction": "Upgrade outdated wiring systems with approved solutions that improve safety and help meet insurance requirements.",
    "Basement Suites and Secondary Suite Wiring": "Safe, code-compliant electrical wiring for basement suites and secondary living spaces with independent power layouts.",
    "Suite Subpanels and Dedicated Circuits": "Separate electrical distribution for suites, including dedicated circuits for kitchens, laundry, and heating systems.",
    "Basement, Garage and Laneway Home Wiring": "Complete wiring solutions for accessory spaces including lighting, outlets, heating, and equipment power needs.",
    "Kitchen and Bathroom Renovation Wiring": "Electrical upgrades for renovation areas with proper circuit protection, spacing, and appliance support.",
    "Home Addition Electrical Wiring": "New electrical wiring integrated into existing systems with proper load planning and clean installation.",
    "Low-Voltage, Data and Network Cabling": "Structured cabling for internet, TV, and data systems to improve connectivity and reduce cable clutter.",
    "Permit-Ready Wiring Documentation": "Clear electrical documentation prepared to support inspections, approvals, and future maintenance reference.",
    "Pot Light and Recessed Lighting Installation": "Ceiling lighting is planned and installed for even illumination, clean alignment, and proper fixture spacing.",
    "LED Lighting Upgrades and Retrofits": "Upgrade older lighting to energy-efficient LED systems for improved brightness and reduced power consumption.",
    "Chandeliers, Pendants and Ceiling Fixtures": "Safe installation and positioning of decorative ceiling fixtures for balanced support and a clean finished look.",
    "Under-Cabinet and Toe-Kick Lighting": "Task and accent lighting installed to improve kitchen visibility and enhance modern design details.",
    "Landscape and Pathway Lighting": "Outdoor lighting designed for walkways, gardens, and exterior areas to improve safety and curb appeal.",
    "Motion Sensor and Security Lighting": "Automatic lighting systems installed to enhance visibility and security around entrances and exterior spaces.",
    "Dimmers, Lighting Zones and Scene Controls": "Lighting control systems set up for adjustable brightness, comfort, and customized room ambiance.",
    "Lighting Troubleshooting and Repairs": "Diagnosis and repair of flickering, failed, or unstable lighting caused by wiring, load, or fixture issues.",
    "Outlet Repair and Replacement": "Repair or replace worn outlets to restore safe, secure plug connection and reliable everyday electrical use.",
    "New Outlet and Switch Installation": "Install new outlets and switches where needed for improved access, convenience, and room functionality.",
    "USB, Smart and Tamper-Resistant Outlets": "Upgrade outlets with USB charging, tamper-resistant safety, and smart features for modern home convenience.",
    "GFCI Outlet Installation for Wet Areas": "Install GFCI protection in kitchens, bathrooms, and outdoor areas to reduce shock risk in wet locations.",
    "AFCI Protection for Living Areas and Bedrooms": "Add arc-fault protection in living spaces and bedrooms to improve electrical safety and fire prevention.",
    "Dedicated Appliance Circuits": "Install dedicated circuits for appliances to ensure safe, stable power and prevent circuit overloads.",
    "Range, Oven and Cooktop Electrical Connections": "Safe electrical connections for cooking appliances sized for proper load handling and reliable performance.",
    "Dishwasher and Laundry Electrical Connections": "Proper circuit and wiring setup for dishwashers, garburators, microwaves, and laundry equipment.",
    "Troubleshooting Outlets and Circuit Issues": "Diagnose and repair dead outlets, tripping breakers, and hidden wiring issues to restore safe operation.",
    "Heat Pump Electrical Circuits": "Safe electrical circuits for heat pumps designed to handle startup load and provide proper disconnect access.",
    "Air Conditioning and HVAC Wiring": "Reliable wiring for HVAC and cooling systems with correct protection, routing, and service clearance.",
    "Electric Heating and Baseboard Circuits": "Properly rated circuits for electric furnaces and baseboard heaters to ensure safe and consistent heating.",
    "Thermostat and Control Wiring": "Neatly installed control wiring for thermostats and HVAC systems for accurate and reliable operation.",
    "Bathroom and Exhaust Fan Wiring": "Safe electrical connections for ventilation fans to support moisture control and proper airflow.",
    "Dedicated Mechanical Room Circuits": "Organized power distribution for mechanical rooms to improve safety, access, and maintenance efficiency.",
    "Outdoor Disconnects and Equipment Connections": "Weather-rated electrical connections with safe disconnects for exterior HVAC and equipment systems.",
    "Load Review for Heating and Cooling Upgrades": "Electrical load analysis performed before upgrades to ensure safe system capacity and prevent overloads.",
    "Ceiling Fan Wiring and Installation Support": "Safe wiring and support for ceiling fans with proper control and reliable overhead installation.",
    "Fan-Rated Electrical Box Installation": "Install reinforced ceiling boxes designed to safely support ceiling fans and fixture weight.",
    "Separate Fan and Light Switch Controls": "Independent controls for fans and lighting to improve comfort and room usability.",
    "Bathroom Exhaust Fan Wiring": "Reliable wiring for bathroom exhaust fans to control moisture and improve air circulation.",
    "Kitchen and Laundry Ventilation Wiring": "Electrical connections for ventilation systems in high-moisture and high-use household areas.",
    "Smart Fan Controls and Timers": "Install timers, humidity sensors, and smart controls for automatic and efficient ventilation.",
    "Troubleshooting Fan Wiring and Operation Issues": "Diagnose and repair noisy, non-working, or inconsistent ceiling fan electrical problems.",
    "Ventilation Wiring for Renovations and Suites": "Ventilation power and wiring designed for renovated spaces and secondary suite requirements.",
    "Level 2 EV Charger Installation": "Safe installation of Level 2 home EV chargers with dedicated capacity, protection, and clean garage or driveway setup.",
    "Garage and Driveway Charging Circuits": "Charging circuits installed for convenient access and reliable daily EV charging at home.",
    "Hardwired and Plug-in Charger Setup": "Charger installation matched to equipment type, panel capacity, and homeowner preference.",
    "EV Load Management Solutions": "Smart load management systems installed to help safely balance electrical demand with EV charging.",
    "Panel Capacity Check for EV Chargers": "Electrical capacity is assessed before installation to ensure safe and reliable EV charger operation.",
    "Conduit and Weather-Rated Charger Protection": "Durable conduit and outdoor-rated equipment used to protect EV charging systems from weather exposure.",
    "EV Charger Brand Compatibility Setup": "Installation support for major EV charger brands including Tesla, ChargePoint, and Wallbox systems.",
    "Permit and Inspection Coordination for EV Charging": "Full coordination of permits and inspections to ensure compliant and approved EV charger installation.",
    "Solar-Ready Electrical Conduit Installation": "Future solar pathways installed now to reduce disruption and simplify later solar panel or battery upgrades.",
    "Solar Panel Capacity Review and Planning": "Electrical system capacity is evaluated to ensure safe and efficient planning for future solar installation.",
    "Battery Storage Readiness Planning": "Preparation for future battery backup systems with proper space, load planning, and equipment considerations.",
    "Critical Load Panel Preparation": "Essential circuits are organized for future backup power to support key systems during outages.",
    "Energy Monitoring System Connections": "Install energy monitoring equipment to track and better understand household electrical usage patterns.",
    "Inverter and Disconnect Location Planning": "Plan safe, accessible locations for inverters and disconnects with proper clearance and clean installation layout.",
    "Future Equipment Wiring Provisions": "Electrical pathways prepared in key areas like roofs, garages, and mechanical rooms for future solar equipment.",
    "Coordination with Solar Installers": "Electrical preparation aligned with solar and storage installers to ensure smooth, conflict-free installation.",
    "Smoke Detector Installation and Replacement": "Install and replace smoke detectors for reliable fire-alert coverage and improved home safety.",
    "Smoke detector installation and replacement": "Life-safety devices are placed and connected for dependable fire-alert coverage.",
    "Carbon Monoxide Detector Installation": "Install CO detectors near fuel-burning appliances, garages, and sleeping areas for life-safety protection.",
    "Carbon monoxide detector installation": "CO protection is added where fuel-burning appliances, garages or sleeping areas require attention.",
    "Hardwired Detector Interconnection": "Link smoke and CO alarms so all units activate together for faster, whole-home emergency alerts.",
    "Hardwired detector interconnection": "Linked alarms are connected so alerts can sound throughout the home when one device activates.",
    "Whole-Home Surge Protection": "Protect appliances and electronics from voltage spikes with properly installed surge protection systems.",
    "Whole-home surge protection": "Sensitive electronics and appliances gain a layer of defense against damaging voltage spikes.",
    "Grounding and Bonding Repairs": "Correct grounding and bonding issues to improve electrical safety and ensure proper fault current flow.",
    "Grounding and bonding corrections": "Core safety paths are repaired so fault current can clear more predictably.",
    "Electrical Safety Inspections": "Inspect electrical systems for hazards, outdated components, and code issues with clear recommendations.",
    "Electrical safety inspections": "Visible hazards, outdated devices and code concerns are reviewed before recommendations are made.",
    "Child-Safe and Tamper-Resistant Upgrades": "Upgrade outlets to tamper-resistant devices for improved safety in family and high-use living areas.",
    "Child-safe and tamper-resistant device upgrades": "Receptacles are upgraded to reduce access risks in family spaces and bedrooms.",
    "Code Deficiency Repairs": "Fix electrical issues identified during inspections to bring systems up to current code requirements.",
    "Code deficiency repairs": "Inspection findings are corrected with practical fixes that bring affected areas back into compliance.",
    "Smart Switch and Dimmer Installation": "Install smart switches and dimmers for remote control, lighting scenes, and improved home convenience.",
    "Smart switches and smart dimmers": "Connected controls are installed for easier lighting schedules, scenes and remote operation.",
    "Smart Thermostat and Doorbell Wiring": "Prepare wiring for smart thermostats and video doorbells to support connected home comfort and entry systems.",
    "Smart thermostats and doorbell wiring": "Low-voltage and control wiring is prepared for connected comfort and entry devices.",
    "Security Camera and Low-Voltage Wiring": "Install structured wiring pathways for security cameras to ensure clean, reliable home monitoring setups.",
    "Security camera and low-voltage wiring": "Camera locations receive organized pathways and power planning for cleaner monitoring setups.",
    "Automated Lighting Control Systems": "Set up automated lighting controls to improve convenience, efficiency, and daily lighting management.",
    "Automated lighting controls": "Control systems are configured to reduce manual switching and improve everyday convenience.",
    "Occupancy and Vacancy Sensor Installation": "Install motion and occupancy sensors to automatically control lighting and reduce energy waste.",
    "Occupancy and vacancy sensors": "Sensor controls help lights respond to room use while reducing wasted energy.",
    "Wi-Fi Controlled Outdoor Lighting": "Enable smart control of exterior lighting for scheduling, remote access, and improved outdoor security.",
    "Wi-Fi controlled outdoor lighting": "Exterior lighting can be scheduled or controlled remotely with safe outdoor wiring.",
    "Home Office Power and Data Upgrades": "Upgrade office spaces with additional outlets and network-ready wiring for reliable work-from-home setups.",
    "Home office power and data upgrades": "Workspaces receive stronger receptacle access and network-ready wiring for reliable productivity.",
    "Structured Media and Network Panel Installation": "Centralize low-voltage wiring in organized media panels for easier access, upgrades, and maintenance.",
    "Structured media and network panels": "Low-voltage wiring is organized in one clean hub for easier upgrades and troubleshooting.",
    "Outdoor Outlets and Weatherproof Covers": "Install exterior outlets with weatherproof protection for safe and convenient outdoor power access.",
    "Outdoor outlets and weatherproof covers": "Exterior receptacles are protected against moisture while adding convenient outdoor power access.",
    "Garage and Workshop Power Upgrades": "Upgrade garage and workshop circuits with added outlets and capacity for tools and equipment use.",
    "Garage and workshop power upgrades": "Tool areas receive practical circuits, outlets and capacity for safer project work.",
    "Shed and Detached Building Wiring": "Provide safe electrical wiring for sheds and detached buildings with lighting and power access.",
    "Shed and detached building wiring": "Detached spaces are connected with protected pathways and usable lighting or receptacle layouts.",
    "Hot Tub and Spa Electrical Connections": "Install dedicated electrical connections with proper protection, disconnects, and safety clearances for spas.",
    "Hot tub and spa electrical connections": "High-demand water equipment is wired with required protection, disconnects and safe clearances.",
    "Pool Equipment Bonding and Power": "Ensure safe bonding and electrical supply for pool equipment in wet and high-moisture environments.",
    "Pool equipment bonding and power": "Pool systems are connected with bonding and protection details suited to wet environments.",
    "Patio, Deck and Pergola Lighting": "Install outdoor lighting for patios and decks to improve ambiance, visibility, and outdoor comfort.",
    "Patio, deck and pergola lighting": "Outdoor living areas gain lighting that is weather-aware, comfortable and neatly controlled.",
    "Gate, Pump and Exterior Equipment Circuits": "Provide reliable power circuits for gates, pumps, and outdoor equipment with proper protection.",
    "Gate, pump and exterior equipment circuits": "Specialty exterior equipment receives durable power routing and appropriate protection.",
    "Seasonal Outdoor Power Outlets": "Install dedicated outlets for seasonal lighting to reduce extension cords and improve outdoor safety.",
    "Christmas light and seasonal power outlets": "Seasonal receptacles are positioned to reduce extension-cord clutter and improve outdoor safety.",
    "Breaker Trips and Overload Troubleshooting": "Diagnose circuit overloads, weak breakers, and electrical faults causing repeated breaker trips.",
    "Burning Smell, Buzzing or Warm Devices": "Investigate urgent warning signs to identify loose connections, overheating, or failing electrical components.",
    "Power Loss and Partial Outage Diagnostics": "Trace electrical issues through panels and circuits to locate and restore lost or partial power.",
    "Flickering Light Repairs": "Repair flickering lights caused by wiring issues, loose connections, or fixture and load problems.",
    "Faulty Switches, Outlets and Fixtures": "Replace and repair damaged switches, outlets, and fixtures to restore safe and reliable operation.",
    "Electrical Code Correction Repairs": "Fix non-compliant electrical work with safe, clean corrections to meet current code requirements.",
    "Emergency Electrical Repair Service": "Provide urgent electrical repairs to stabilize unsafe conditions and restore power quickly.",
    "Pre-Sale and Inspection Repair Solutions": "Complete electrical repairs identified in home inspections to support smoother real estate transactions.",
    "Portable Generator Transfer Switch Installation": "Install safe transfer switches for portable generators to prevent backfeed and improve outage safety.",
    "Standby Generator Electrical Connections": "Connect standby generators for reliable backup power during outages with proper safety integration.",
    "Generator Interlock and Inlet Wiring": "Install approved interlock kits and inlet wiring for safe, controlled generator power connection.",
    "Energy-Efficient LED Lighting Conversions": "Upgrade lighting to LED systems for improved efficiency, brightness, and long-term energy savings.",
    "Timer and Photocell Lighting Controls": "Install automatic lighting controls that activate based on time or daylight for improved efficiency.",
    "Load Shedding and Power Management Systems": "Manage electrical loads to prevent overloads and allow safe operation of high-demand equipment.",
    "High-Consumption Circuit Review": "Evaluate heavy power users to improve efficiency and optimize electrical system performance.",
    "Electrical Planning for Heat Pumps and Appliances": "Plan circuits for future heat pumps and appliances to ensure safe capacity and system readiness.",
    "Residential Electrical Permit Coordination": "Identify permit requirements early to ensure all electrical work follows proper documentation and approvals.",
    "Inspection Preparation and Deficiency Correction": "Repair and organize electrical issues before inspections to improve approval success and compliance.",
    "Renovation and Suite Compliance Support": "Ensure renovation and suite electrical work meets current residential code and safety requirements.",
    "Electrical Safety Reports": "Provide clear reports outlining electrical conditions, risks, and recommended improvements for homeowners.",
    "Insurance and Real Estate Electrical Documentation": "Prepare detailed electrical records for insurance claims, property sales, or inspection requirements.",
    "Code-Compliant Installation Planning": "Plan electrical work according to current code standards to ensure safe and compliant installation.",
    "Utility Coordination Support": "Coordinate with utility providers for service access, approvals, and connection scheduling when required.",
    "Final Testing and Homeowner Walkthroughs": "Test, label, and review completed electrical systems to ensure homeowner understanding and confidence.",
    "Kitchen appliance circuits": "Cooking and prep appliances receive dedicated power where load and code requirements demand it.",
    "Kitchen Appliance Circuits": "Install dedicated electrical circuits for kitchen appliances to ensure safe, reliable power for cooking and prep areas.",
    "Bathroom fan and vanity lighting wiring": "Bathroom lighting and ventilation are coordinated for moisture control, comfort and clean switching.",
    "Bathroom Fan and Vanity Lighting Wiring": "Coordinate bathroom lighting and ventilation wiring for moisture control, comfort, and clean operation.",
    "Island, pantry and cabinet power": "Convenience power is placed into storage and work zones without disrupting the finished design.",
    "Island, Pantry and Cabinet Power": "Provide discreet power outlets in islands, pantries, and cabinets for convenient kitchen workspace access.",
    "Heated floor electrical connections": "Floor-warming systems are connected with proper controls and protection for comfortable operation.",
    "Heated Floor Electrical Connections": "Connect radiant floor heating systems with proper controls and protection for safe, comfortable operation.",
    "Range, cooktop and wall oven circuits": "Major cooking appliances are supplied with correctly rated circuits and safe terminations.",
    "Range, Cooktop and Wall Oven Circuits": "Install properly rated circuits for major cooking appliances to ensure safe and reliable performance.",
    "Microwave, dishwasher and garburator wiring": "Kitchen utility appliances are connected for dependable use in busy daily routines.",
    "Microwave, Dishwasher and Garburator Wiring": "Wire essential kitchen appliances for dependable daily operation in high-use kitchen environments.",
    "Renovation rough-in and final device installation": "Rough wiring and final devices are coordinated with the renovation schedule and finish plan.",
    "Renovation Rough-In and Final Device Installation": "Coordinate rough-in wiring and final device installation to match renovation timelines and finishing stages.",
    "Contractor-friendly scheduling and coordination": "Electrical work is sequenced around trades, inspections and project milestones.",
    "Contractor-Friendly Scheduling and Coordination": "Plan electrical work around other trades, inspections, and construction milestones for smooth project flow.",
  };

  if (exactSummaries[service]) return exactSummaries[service];

  if (text.includes("ev") || text.includes("charger")) return "Charging equipment is planned with panel capacity, dedicated wiring and safe daily access in mind.";
  if (text.includes("panel") || text.includes("breaker") || text.includes("meter") || text.includes("service upgrade")) return "Distribution equipment is reviewed for capacity, organization, protection and inspection-ready workmanship.";
  if (text.includes("load") || text.includes("capacity")) return "Electrical demand is checked before adding modern appliances, heating, charging or specialty equipment.";
  if (text.includes("wiring") || text.includes("rewiring") || text.includes("rough-in") || text.includes("cabling")) return "Cable routes are planned cleanly with proper protection, access and long-term reliability in mind.";
  if (text.includes("light") || text.includes("chandelier") || text.includes("pendant") || text.includes("fixture") || text.includes("dimmer")) return "Lighting work improves visibility, control and finish quality while keeping connections safe.";
  if (text.includes("outlet") || text.includes("switch") || text.includes("gfci") || text.includes("afci") || text.includes("usb")) return "Device upgrades add safer access to power with protection matched to each room and circuit use.";
  if (text.includes("appliance") || text.includes("range") || text.includes("oven") || text.includes("dishwasher") || text.includes("microwave") || text.includes("laundry")) return "Dedicated appliance power is sized and connected for dependable operation under daily household demand.";
  if (text.includes("heat pump") || text.includes("air conditioning") || text.includes("hvac") || text.includes("furnace") || text.includes("baseboard") || text.includes("thermostat")) return "Comfort equipment is supported with correctly sized circuits, controls and service access.";
  if (text.includes("fan") || text.includes("exhaust") || text.includes("ventilation") || text.includes("humidity")) return "Airflow equipment is wired for dependable switching, moisture control and practical maintenance.";
  if (text.includes("smoke") || text.includes("carbon monoxide") || text.includes("detector")) return "Life-safety devices are placed, interconnected and tested for dependable warning coverage.";
  if (text.includes("surge") || text.includes("grounding") || text.includes("bonding") || text.includes("tamper") || text.includes("safety")) return "Protection improvements reduce electrical risk and bring important safety details up to standard.";
  if (text.includes("solar") || text.includes("battery") || text.includes("inverter") || text.includes("energy monitoring")) return "Future energy upgrades are prepared with organized pathways, capacity review and equipment planning.";
  if (text.includes("smart") || text.includes("wi-fi") || text.includes("wifi") || text.includes("automated") || text.includes("network") || text.includes("camera") || text.includes("doorbell") || text.includes("media")) return "Connected-home systems are supported with clean wiring, logical device locations and reliable controls.";
  if (text.includes("outdoor") || text.includes("landscape") || text.includes("patio") || text.includes("deck") || text.includes("garage") || text.includes("shed") || text.includes("pool") || text.includes("hot tub") || text.includes("spa") || text.includes("gate") || text.includes("pump")) return "Exterior and specialty power is built around weather exposure, protection and durable everyday use.";
  if (text.includes("generator") || text.includes("transfer switch") || text.includes("interlock") || text.includes("backup")) return "Backup-power equipment is connected with safer transfer methods and clear operating paths.";
  if (text.includes("permit") || text.includes("inspection") || text.includes("documentation") || text.includes("reports") || text.includes("code")) return "Documentation and compliance support keeps the work organized for approvals, records and review.";
  if (text.includes("troubleshooting") || text.includes("tripping") || text.includes("burning") || text.includes("buzzing") || text.includes("power loss") || text.includes("outage") || text.includes("flickering") || text.includes("faulty") || text.includes("dead")) return "Diagnostics focus on finding the real cause before making safe, targeted repairs.";
  if (text.includes("kitchen") || text.includes("bathroom") || text.includes("renovation") || text.includes("heated floor") || text.includes("vanity")) return "Renovation electrical work is coordinated around layout, protection, finish details and trade timing.";

  return `This ${categoryTitle.toLowerCase()} item is planned with safe installation, clear routing and tidy final workmanship.`;
}

function ResidentialServicesSampleClonePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Residential Electrical Services Clone",
    provider: {
      "@type": "Electrician",
      name: "GK Electric",
      telephone: "+1-778-344-4567",
      areaServed: "British Columbia Lower Mainland",
    },
    serviceType: residentialServices.map((category) => category.title),
    description:
      "A redesigned residential electrical services page clone including home wiring, panel upgrades, lighting, outlets, EV chargers, safety inspections, generators and code compliance.",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-surface via-surface to-surface/95 min-h-[58vh] flex items-center text-surface-foreground">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float delay-1000" />
          </div>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
          <div className="absolute bottom-8 left-8 text-primary/10 animate-float pointer-events-none">
            <Home className="h-36 w-36 rotate-12" />
          </div>
          <div className="absolute top-24 right-16 hidden md:block text-primary/10 animate-float delay-500 pointer-events-none">
            <LampCeiling className="h-28 w-28 -rotate-12" />
          </div>

          <div className="container relative z-10 mx-auto px-4 py-24">
            <div className="max-w-5xl">
              <div className="max-w-4xl">
                <ElectricSectionTag label="HOMES" icon={Home} tone="dark" variant="electric-v1-2" className="mb-8 [&>span:last-child]:!text-[15px] [&>span:last-child]:!font-normal" />
                <h1
                  data-reveal
                  className="font-display text-[80px] font-extrabold tracking-tight leading-[0.94] mb-7"
                >
                  <span className="text-typewriter">
                    Residential <span className="brand-highlight">Services</span>
                  </span>
                </h1>
                <p className="text-[20px] font-light text-surface-foreground/75 max-w-3xl leading-relaxed mb-8">
                  Keep your home safe, efficient, and fully powered with expert residential electrical services. From electrical repairs and lighting upgrades to panel replacements, EV charger installations, rewiring, permits, and safety inspections, we deliver reliable, code-compliant solutions for every home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="electric" size="xl">
                    <Link to="/contact">
                      Request Residential Estimate <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outlineLight" size="xl">
                    <a href="tel:+17783444567">
                      <Phone className="h-5 w-5" /> Call +1 (778) 344-4567
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-border bg-muted/35 py-0">
          <style>{`
            @keyframes residentialServiceTickerMove {
              from { transform: translate3d(0, 0, 0); }
              to { transform: translate3d(-50%, 0, 0); }
            }
            .residential-service-ticker-track {
              animation: residentialServiceTickerMove 92s linear infinite;
              backface-visibility: hidden;
              transform: translate3d(0, 0, 0);
              will-change: transform;
            }
            .residential-service-ticker:hover .residential-service-ticker-track {
              animation-play-state: paused;
            }
          `}</style>
          <div className="flex min-h-14 items-stretch gap-0 px-0 md:px-6">
            <div className="relative z-20 flex shrink-0 items-center gap-3 self-stretch border-r border-border bg-muted/95 px-3 pr-5 md:px-0 md:pr-5">
              <span className="flex h-8 w-8 items-center justify-center !rounded-[10px] bg-gradient-electric shadow-glow">
                <Bolt className="h-4 w-4 text-primary-foreground" />
              </span>
              <div className="leading-tight">
                <h2 className="font-display text-lg font-bold uppercase tracking-tight text-foreground md:text-xl">Residential Services Map</h2>
              </div>
            </div>

            <div className="residential-service-ticker relative flex min-w-0 flex-1 overflow-hidden py-0">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-muted/95 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-muted/95 to-transparent" />
              <div className="residential-service-ticker-track flex min-w-max items-stretch gap-0 py-0">
                {[...residentialServices, ...residentialServices].map((service, index) => (
                  <a
                    key={`${service.title}-${index}`}
                    href={`#residential-service-${index % residentialServices.length}`}
                    className="group/service-news relative flex min-h-14 shrink-0 items-center gap-2 self-stretch rounded-none border-r border-border/80 px-8 pb-[3px] text-left transition-all duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center !rounded-[10px] bg-gradient-to-br ${service.accent} shadow-sm transition-colors duration-200`}>
                      <service.icon className="h-4 w-4 text-primary-foreground" />
                    </span>
                    <span className="whitespace-nowrap font-display text-base font-bold uppercase tracking-wide text-foreground antialiased transition-colors duration-200">
                      {service.title}
                    </span>
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-center scale-x-0 bg-primary transition-transform duration-200 group-hover/service-news:scale-x-100" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-muted/35">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center mb-14">
              <div className="max-w-3xl" data-reveal>
                <ElectricSectionTag label="Residential Electrical Services" icon={ClipboardCheck} tone="light" variant="electric-v1-2" className="mb-5" />
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-5">
                  Safe, Reliable Electrical Work for Your Home
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Professional residential electrical services for repairs, upgrades, renovations, new construction, and safety improvements. We help homeowners with code-compliant solutions, modern energy needs, and future-ready electrical systems designed for comfort, efficiency, and peace of mind.
                </p>
              </div>

              <div data-reveal="right" className="relative">
                <article className="group relative flex border-2 flex-col overflow-hidden rounded-3xl border-foreground/30 bg-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-elegant">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-left">
                      <div className="font-sans text-lg font-extrabold uppercase leading-none tracking-[0.22em] text-foreground">
                        GK ELECTRIC
                      </div>
                      <div className="mt-1 text-[12px] uppercase tracking-widest text-muted-foreground">
                        Licensed Electricians
                      </div>
                    </div>
                    <div className="shrink-0">
                      <div className="shrink-0 rounded-2xl bg-[#00497b] px-3 py-2.5 shadow-xl ring-2 ring-white/90">
                        <div className="flex items-center justify-end gap-3">
                          <img
                            src={tsbcLogo}
                            alt="Technical Safety BC logo"
                            className="h-12 w-12 object-contain"
                            loading="lazy"
                          />
                          <div className="text-right text-white">
                            <div className="text-[0.95rem] tracking-wider text-white">TSBC Licence</div>
                            <div className="text-[1.1rem] tracking-[1.5px] font-bold text-white"># LEL0209793</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2.5">
                    {[
                      "Fully Licensed & Insured",
                      "100% Code-Compliant Work",
                      "24/7 Emergency Service",
                      "Quality Workmanship Guaranteed",
                    ].map((tag) => (
                      <div
                        key={tag}
                        className="flex min-h-9 w-full items-center gap-1.5 rounded-[10px] border border-primary/20 bg-primary/10 px-3 py-1.5 text-[14px] font-medium leading-none text-foreground shadow-sm"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                        <span className="truncate">{tag}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex-none flex items-start justify-between gap-5">
                    <div className="w-full text-left">
                      <div className="mb-4 h-1 w-14 rounded-full bg-foreground" />
                      <h2 className="whitespace-nowrap font-sans text-[clamp(0.78rem,1.7vw,0.95rem)] font-semibold uppercase leading-none tracking-[0.18em] text-foreground">
                        Proudly Serving the Lower Mainland, BC
                      </h2>
                    </div>
                  </div>

                  <div className="relative z-10 mt-3 grid grid-cols-3 gap-2">
                    {[
                      { icon: Home, label: "Residential", to: "/services/residential" as const },
                      { icon: Building2, label: "Commercial", to: "/services/commercial" as const },
                      { icon: Factory, label: "Industrial", to: "/services/industrial" as const },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="group/service flex items-center justify-center gap-1.5 rounded-xl border border-border bg-muted/40 px-2.5 py-2 text-center transition-all duration-300 hover:border-primary/45 hover:bg-primary/[0.1] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-white"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center !rounded-[10px] border border-primary/20 bg-primary/15 text-primary transition-all duration-300 group-hover/service:bg-primary group-hover/service:text-primary-foreground">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <div className="font-sans text-xs font-bold uppercase tracking-wide text-foreground sm:text-sm">{item.label}</div>
                      </Link>
                    ))}
                  </div>
                </article>
              </div>
            </div>

            <div className="space-y-10">
              {residentialServices.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <article id={`residential-service-${residentialServices.indexOf(category)}`} key={category.title} data-reveal className="scroll-mt-28 relative rounded-[2rem] border border-border bg-card shadow-card transition-all duration-300 hover:border-primary/40">
                    <div className="absolute right-6 top-6 text-primary/5 pointer-events-none">
                      <CategoryIcon className="h-28 w-28 -rotate-12" />
                    </div>
                    <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                      <div className="relative h-full bg-surface text-surface-foreground p-8 md:p-10 rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none">
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "22px 22px" }} />
                        <div className="relative z-10 lg:sticky lg:top-28 lg:self-start" data-reveal="left">
                          <div className={`mb-6 flex h-16 w-16 items-center justify-center !rounded-[10px] bg-gradient-to-br ${category.accent} shadow-glow`}>
                            <CategoryIcon className="h-8 w-8 text-primary-foreground" />
                          </div>
                          <h3 className="font-display text-3xl md:text-4xl font-extrabold mb-4">{category.title}</h3>
                          <p className="text-surface-foreground/70 leading-relaxed">{category.description}</p>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4 p-6 md:p-8">
                        {category.services.map((service, serviceIndex) => {
                          const ServiceIcon = getServiceCardIcon(service, category.title);
                          const serviceSummary = getServiceCardSummary(service, category.title);

                          return (
                          <div key={service} data-reveal="right" className="group rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5" style={{ transitionDelay: `${serviceIndex * 55}ms` }}>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center !rounded-[10px] bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                              <ServiceIcon className="h-6 w-6" />
                            </div>
                            <h4 className="font-display text-xl font-bold text-foreground mb-2">{service}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{serviceSummary}</p>
                          </div>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
              <div className="lg:sticky lg:top-28" data-reveal="left">
                <ElectricSectionTag label="Professional Workflow" icon={Siren} tone="light" variant="electric-v1-2" className="mb-5" />
                <h2 className="font-display text-4xl md:text-6xl font-extrabold text-foreground mb-5">
                  Designed To Feel Clear From First Call To Final Test
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  The redesigned clone adds a service journey that helps homeowners understand exactly how GK Electric moves from diagnosis to safe completion.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="electric" size="lg">
                    <Link to="/contact">
                      Request Estimate <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="https://wa.me/17783444567" target="_blank" rel="noreferrer">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent hidden sm:block" />
                <div className="grid gap-5">
                  {process.map((step, index) => (
                    <div key={step.title} data-reveal="right" className="group relative rounded-3xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-elegant" style={{ transitionDelay: `${index * 90}ms` }}>
                      <div className="flex gap-5">
                        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center !rounded-[10px] bg-gradient-electric text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
                          <step.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="mb-1 text-xs font-bold uppercase tracking-[0.25em] text-primary">Step {index + 1}</div>
                          <h3 className="font-display text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface text-surface-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] items-center">
              <div data-reveal="left">
                <ElectricSectionTag label="Homeowner FAQ" icon={ClipboardCheck} tone="dark" variant="electric-v1-2" className="mb-5" />
                <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-5">
                  Residential Service Questions
                </h2>
                <p className="text-lg text-surface-foreground/70 leading-relaxed">
                  A fast reference section for homeowners comparing repairs, upgrades, permits and full residential electrical scopes.
                </p>
              </div>
              <div className="grid gap-4">
                {faqs.map((faq, index) => (
                  <article key={faq.q} data-reveal="right" className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50" style={{ transitionDelay: `${index * 90}ms` }}>
                    <h3 className="font-display text-xl font-bold mb-2">{faq.q}</h3>
                    <p className="text-surface-foreground/70 leading-relaxed">{faq.a}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-electric text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="mx-auto max-w-4xl">
              <Zap className="mx-auto mb-6 h-16 w-16" />
              <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-6">
                Need Reliable Electrical Work At Home?
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                Speak with GK Electric about repairs, upgrades, renovations, inspections, EV charging, panel work or complete home wiring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="default" size="xl" className="bg-surface text-surface-foreground hover:bg-surface/90">
                  <a href="tel:+17783444567">
                    <Phone className="h-5 w-5" /> Call +1 (778) 344-4567
                  </a>
                </Button>
                <Button asChild variant="outline" size="xl" className="border-surface text-surface hover:bg-surface hover:text-surface-foreground">
                  <a href="https://wa.me/17783444567" target="_blank" rel="noreferrer">
                    <MessageCircle className="h-5 w-5" /> WhatsApp Quick Response
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
