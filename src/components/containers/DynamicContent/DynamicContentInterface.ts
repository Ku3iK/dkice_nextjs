import { IconWithListTileInterface } from "@components/Tiles/IconWithListTile/IconWithListTileInterface";

export interface DynamicContentInterface {
    tilesContainer: Array<{
        language: string;
        tiles: Array<IconWithListTileInterface>;
    }>
}