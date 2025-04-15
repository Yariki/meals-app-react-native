import { View, Text, Pressable } from "react-native";

export interface CategoryGridTileProps {
    title?: string;
    color?: string;  
    id?: string;
}

export const GategoryGridTile = (props: CategoryGridTileProps) => {
    return (
        <View>
            <Pressable>
                <View>
                    <Text style={{color: props.color}}>{props.title}</Text>
                </View>
            </Pressable>
        </View>
    );   
}