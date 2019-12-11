import React, { Component } from 'react';
import { SvgXml } from 'react-native-svg';

const iconsSet = require('./data');

const defaultSet = 'miscellaneous';

export default class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { group: sourceGroup, name: sourceName, width = 20, height = 20, color, stroke, ...rest } = this.props || {};

    const [, group, name] = sourceName.match(/(.*?)\/(.*)/) || [, sourceGroup || defaultSet, sourceName];

    let icon = iconsSet[group][name];
    if(typeof icon !== 'string') icon = iconsSet[defaultSet].question;

    if(color) icon = icon.replace(/<path /g, `<path fill="${color}" `)
    if(stroke) icon = icon.replace(/<path /g, `<path stroke="${stroke}" `)

    return <SvgXml xml={icon} width={width} height={height} {...rest} />
  }
}
