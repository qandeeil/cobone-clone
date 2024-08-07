import React, {useState} from 'react';
import {ScrollView, View, Dimensions} from 'react-native';
import styles from './styles';
import {Item} from './item/Item';

interface IDataItems {
  _id: string;
  name: string;
  image: string;
}

type ItemsSectionProps = {
  data: IDataItems[];
};

export function ItemsSection({data}: ItemsSectionProps) {
  const [activePage, setActivePage] = useState(0);
  const {width} = Dimensions.get('window');

  const renderRows = () => {
    const numRows = Math.ceil(data.length / 2);
    let rows = [];

    for (let i = 0; i < numRows; i++) {
      let rowItems = data.slice(i * 2, i * 2 + 2);
      rows.push(
        <View key={i} style={styles.row}>
          {rowItems.map(item => (
            <Item item={item} key={item._id} />
          ))}
        </View>,
      );
    }

    return rows;
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.floor(offsetX / (width / 3));
    if (pageIndex !== -1) setActivePage(pageIndex);
  };

  const renderDots = () => {
    const numPages = Math.ceil(data.length / 6);
    let dots = [];

    for (let i = 0; i < numPages; i++) {
      dots.push(
        <View
          key={i}
          style={[styles.dot, {opacity: i === activePage ? 1 : 0.3}]}
        />,
      );
    }

    return dots;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {renderRows()}
      </ScrollView>
      <View style={styles.dotsContainer}>{renderDots()}</View>
    </View>
  );
}
