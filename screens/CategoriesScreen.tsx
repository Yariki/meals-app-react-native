import { View } from "react-native/Libraries/Components/View/View";
import { FlatList,  Text } from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import Category from "../models/category";
import { GategoryGridTile } from "../components/CategoryGridTile";


function renderItem(item: Category){
    return (
        <GategoryGridTile title={item.title} color={item.color}></GategoryGridTile>
    );    
}


export const CategoriesScreen = () => {
    return (
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => renderItem(item)}
        ></FlatList>
    );
};