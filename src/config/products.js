const products = [
  {
    id: 'hdd-wd-blue',
    category: 'Desktop HDD',
    title: 'WD Blue Hard Drive',
    description: 'Reliable everyday computing storage, perfect for desktop PCs and basic storage needs. Balanced performance and affordability.',
    specs: [
      { icon: 'hdd', text: 'Available in 1TB to 6TB' },
      { icon: 'tachometer-alt', text: '5400 RPM / 7200 RPM' },
      { icon: 'memory', text: '64MB Cache' }
    ],
    image: 'https://m.media-amazon.com/images/I/71Czt9ypIbL._AC_SX679_.jpg'
  },
  {
    id: 'hdd-wd-red',
    category: 'NAS HDD',
    title: 'WD Red NAS Drive',
    description: 'Specifically designed for NAS systems, offering reliability and performance for 24/7 operation in RAID environments.',
    specs: [
      { icon: 'hdd', text: 'Available in 2TB to 14TB' },
      { icon: 'tachometer-alt', text: '5400 RPM' },
      { icon: 'server', text: 'NAS Optimized' }
    ],
    image: 'https://m.media-amazon.com/images/I/71V2LC3GpXL._AC_SX679_.jpg'
  },
  {
    id: 'hdd-seagate-barracuda',
    category: 'Desktop HDD',
    title: 'Seagate BarraCuda',
    description: 'Versatile hard drive for desktop computing, gaming, and basic storage needs with good performance and reliability.',
    specs: [
      { icon: 'hdd', text: 'Available in 1TB to 8TB' },
      { icon: 'tachometer-alt', text: '5400 RPM / 7200 RPM' },
      { icon: 'memory', text: '256MB Cache' }
    ],
    image: 'https://m.media-amazon.com/images/I/81pAOJFcsFS._AC_SX679_.jpg'
  },
  {
    id: 'hdd-seagate-ironwolf',
    category: 'NAS HDD',
    title: 'Seagate IronWolf',
    description: 'Purpose-built for NAS enclosures, delivering reliable performance for always-on applications and multi-user environments.',
    specs: [
      { icon: 'hdd', text: 'Available in 1TB to 18TB' },
      { icon: 'tachometer-alt', text: '5900 RPM / 7200 RPM' },
      { icon: 'network-wired', text: 'Multi-user Technology' }
    ],
    image: 'https://m.media-amazon.com/images/I/71ijXHv0jFL._AC_SX679_.jpg'
  }
];

export default products;
