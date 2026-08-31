import {
	Tabs,
		TabList,
		TabTrigger,
		TabSlot,
		TabTriggerSlotProps,
		TabListProps,
} from 'expo-router/ui';
import { SymbolView } from 'expo-symbols';
import { Pressable, View, StyleSheet, useWindowDimensions } from 'react-native';

import { ExternalLink } from './external-link';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function AppTabs() {
	const colors = useTheme();
	return (
			<Tabs>
			<TabSlot style={[styles.tabSlot, { backgroundColor: colors.background }]} />
			<TabList asChild>
			<CustomTabList>
			<TabTrigger name="home" href="/" asChild>
			<TabButton>Home</TabButton>
			</TabTrigger>
			<TabTrigger name="explore" href="/explore" asChild>
			<TabButton>Explore</TabButton>
			</TabTrigger>
			</CustomTabList>
			</TabList>
			</Tabs>
	       );
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
	return (
			<Pressable {...props} style={({ pressed }) => pressed && styles.pressed}>
			<ThemedView
			type={isFocused ? 'backgroundSelected' : 'backgroundElement'}
			style={styles.tabButtonView}>
			<ThemedText type="small" themeColor={isFocused ? 'text' : 'textSecondary'}>
			{children}
			</ThemedText>
			</ThemedView>
			</Pressable>
	       );
}

export function CustomTabList(props: TabListProps) {
	const colors = useTheme();
	const { width } = useWindowDimensions();
	const isCompact = width < 520;

	return (
			<View
			{...props}
			style={[
			styles.tabListContainer,
			{ backgroundColor: colors.background },
			isCompact && styles.tabListContainerCompact,
			]}
			>
			<ThemedView
			type="backgroundElement"
			style={[
			styles.innerContainer,
			isCompact && styles.innerContainerCompact,
			]}
			>
			<ThemedText type="smallBold" style={styles.brandText}>
			ISEP Lab
			</ThemedText>
			{props.children}
			{!isCompact && (
					<ExternalLink href="https://docs.expo.dev" asChild>
					<Pressable style={styles.externalPressable}>
					<ThemedText type="link">Docs</ThemedText>
					<SymbolView
					tintColor={colors.text}
					name={{ ios: 'arrow.up.right.square', web: 'link' }}
					size={12}
					/>
					</Pressable>
					</ExternalLink>
				       )}
			</ThemedView>
				</View>
				);
}

const styles = StyleSheet.create({
tabSlot: {
height: '100%',
paddingTop: 88,
},
tabListContainer: {
position: 'absolute',
width: '100%',
padding: Spacing.three,
justifyContent: 'center',
flexDirection: 'row',
alignItems: 'center',
zIndex: 10,
},
tabListContainerCompact: {
paddingHorizontal: 8,
},
innerContainerCompact: {
paddingHorizontal: Spacing.three,
		       },
innerContainer: {
paddingVertical: Spacing.two,
		 paddingHorizontal: Spacing.five,
		 borderRadius: Spacing.five,
		 flexDirection: 'row',
		 alignItems: 'center',
		 flexGrow: 1,
		 gap: Spacing.two,
		 maxWidth: MaxContentWidth,
		},
brandText: {
marginRight: 'auto',
	   },
pressed: {
opacity: 0.7,
	 },
tabButtonView: {
paddingVertical: Spacing.one,
		 paddingHorizontal: Spacing.three,
		 borderRadius: Spacing.three,
	       },
externalPressable: {
flexDirection: 'row',
	       justifyContent: 'center',
	       alignItems: 'center',
	       gap: Spacing.one,
	       marginLeft: Spacing.three,
		   },
		   });
