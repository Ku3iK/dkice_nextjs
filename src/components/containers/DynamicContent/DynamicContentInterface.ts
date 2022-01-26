import { IconWithListTileInterface } from "@components/Tiles/IconWithListTile/IconWithListTileInterface";

export interface DynamicContentInterface {
    tilesContainer: Array<{
        language: string;
        sectionTitle: string;
        tiles: Array<IconWithListTileInterface>;
    }>
}