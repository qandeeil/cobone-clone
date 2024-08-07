import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import {TagCard} from '../cards/tagCard/TagCard';

interface IData {
  _id: string;
  name: string;
}

type SectionTagsProps = {
  title: string;
  data: IData[];
  numColumns: number;
};

export function SectionTags({title, data, numColumns}: SectionTagsProps) {
  const getTags = React.useMemo(() => {
    return data.flatMap((item: any) => (Array.isArray(item) ? item : [item]));
  }, [data]);

  const renderItem = React.useCallback(
    (item: any) => <TagCard name={item.name} key={item._id}/>,
    [],
  );

  const renderRows = () => {
    const numRows = Math.ceil(getTags.length / 2);
    let rows = [];

    for (let i = 0; i < numRows; i++) {
      let rowItems = getTags.slice(i * numColumns, i * numColumns + numColumns);
      rows.push(
        <View key={i} style={styles.row}>
          {rowItems.map(item => renderItem(item))}
        </View>,
      );
    }

    return rows;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        {renderRows()}
      </ScrollView>
    </View>
  );
}
