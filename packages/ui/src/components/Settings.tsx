import { H2, Separator, XStack, YGroup, YStack, withStaticProperties } from 'tamagui'
import { styled } from 'tamagui'
import { SettingItem } from './SettingItem'

const SettingsWrapper = styled(YStack, {
  borderColor: '$color4',
  gap: '$5',
  f: 1,
})

const SettingsItems = styled(YStack, {
  '$platform-web': {
    // https://github.com/tamagui/tamagui/issues/1803
    // separator: <Separator borderColor="$color3" mx="$-4" borderWidth="$0.25" />,
    gap: '$4',
    m: '$4',
  },
  gap: '$4',
  m: '$4',
})

const SettingsGroup = styled(YGroup, {
  '$platform-native': {
    separator: (
      <XStack>
        <YStack width={20} backgroundColor="$color2" />
        <Separator borderColor="$color4" borderWidth="$0.25" />
      </XStack>
    ),
  },
  backgroundColor: 'transparent',
})

const SettingsTitle = styled(H2, {
  '$platform-web': {
    mx: '$6',
  },
  mx: '$4',
  py: '$4',
})

export const Settings = withStaticProperties(SettingsWrapper, {
  Item: SettingItem,
  Items: SettingsItems,
  Group: SettingsGroup,
  Title: SettingsTitle,
})
