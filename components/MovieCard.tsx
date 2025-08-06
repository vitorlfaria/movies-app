import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../constants/icons";

const MovieCard = ({
	id,
	poster_path,
	title,
	vote_average,
	release_date,
}: Movie) => {
	return (
		<Link href={`/movies/${id}`} asChild>
			<TouchableOpacity className="w-[30%]">
				<Image
					source={{
						uri: poster_path
							? `https://image.tmdb.org/t/p/w500${poster_path}`
							: "https://placehold.co/600x400/1a1a1a/ffffff.png",
					}}
					className="w-full h-52 rounded-lg"
					resizeMode="cover"
				/>

				<Text
					className="text-sm font-bold text-white mt-2"
					numberOfLines={1}
				>
					{title}
				</Text>

				<View className="flex-row items-center justify-start gap-x-1">
					<Image source={icons.star} className="size-4" />

					<View className="flex-row w-[80%] items-end justify-between">
						<Text className="text-white test-xs font-bold">
							{Math.ceil(vote_average / 2)} / 5
						</Text>

						<Text className="text-xs font-medium text-light-300">
							{release_date.split("-")[0]}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</Link>
	);
};

export default MovieCard;

const styles = StyleSheet.create({});
