import React from 'react';
import { ToggleProps } from '@kitten/ui';
import { ToggleShowcase } from './toggleShowcase.component';
import {
  toggleSettings,
  toggleShowcase,
} from './type';
import { ShowcaseContainer } from '../common/showcase.container';

export class ToggleContainer extends React.Component {

  private renderItem = (props: ToggleProps): React.ReactElement<ToggleProps> => {
    return (
      <ToggleShowcase {...props} />
    );
  };

  public render(): React.ReactNode {
    return (
      <ShowcaseContainer
        showcase={toggleShowcase}
        settings={toggleSettings}
        renderItem={this.renderItem}
      />
    );
  }
}
