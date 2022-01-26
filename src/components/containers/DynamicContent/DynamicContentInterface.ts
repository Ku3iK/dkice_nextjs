import { IconWithListTileInterface } from "@components/Tiles/IconWithListTile/IconWithListTileInterface";

export interface DynamicContentInterface {
    tilesContainer: {
        language: string;
        sectionTitle: string;
        tiles: Array<IconWithListTileInterface>;
    }
}