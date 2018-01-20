import { Component } from 'react';
import ReactCarousel from 'src/ReactCarousel';

const ImageCollections = [
  {
    src:
      'http://4.bp.blogspot.com/-7XPum5XPKig/UagR26pf8NI/AAAAAAAAMRI/1knjdlgR6WI/s1600/big-eagle-standing-in-the-snow-hd-animal-wallpaper-eagles.jpg',
    alt: 'Black Eagle',
  },
  {
    src:
      'http://thewallpaper.co/wp-content/uploads/2016/03/mountains-king-bird-golden-eagle-full-hd-wallpaper-amazing-wallpaper-hd-beauty-1920x1080.jpg',
    alt: 'White Eagle',
  },
  {
    src:
      'http://3.bp.blogspot.com/-x-Xy1diohgw/UagR625Zs-I/AAAAAAAAMRk/rhktDQexKzs/s1600/hd-anime-girls-eagles-birds-winter-snow-disassembly-animals-photo-on-701271.jpg',
    alt: 'White Eagle',
  },
  {
    src: 'http://jinnanyang.com/data/out/3/585343262-1920x1080-eagle-wallpaper.jpg',
    alt: 'White Eagle',
  },
  {
    src: 'http://jinnanyang.com/data/out/3/585343552-1920x1080-eagle-wallpaper.jpg',
    alt: 'White Eagle',
  },
];

export default class ReactCarouselItem extends Component {
  render() {
    return <ReactCarousel options={ImageCollections} />;
  }
}
