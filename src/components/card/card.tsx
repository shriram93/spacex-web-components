import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "spacex-card",
  styleUrl: "card.scss",
  shadow: true,
})
export class SpacexCard {

  /**
   * Image URL to display
   */
  @Prop() imageurl: string;

  /**
   * Mission name
   */
  @Prop() missonname: string;

  /**
   * Flight number
   */
  @Prop() flightnumber: string;

  /**
   * Launch year
   */
  @Prop() launchyear: string;

  /**
   * Launch success
   */
  @Prop() launchsuccess: string;

  /**
   * Land success
   */
  @Prop() landsuccess: string;
  
  /**
   * Mission Ids
   */
  @Prop() missionids: string;
  
  render() {
    return (
      <div class="launch-card">
        <div class="launch-card__image">
          <img src={this.imageurl} alt={this.missonname} />
        </div>
        <div class="launch-card__name">
          <p>{`${this.missonname} #${this.flightnumber}`}</p>
        </div>
        {this.missionids && this.missionids.length > 0 && (
          <p class="launch-card__data">
            <span class="launch-card__data__label">Mission ids:</span>
            <span class="launch-card__data__value">
              <ul>
                {this.missionids.split(',').map((missionId) => (
                  <li key={missionId}>{missionId.trim()}</li>
                ))}
              </ul>
            </span>
          </p>
        )}
        <p class="launch-card__data">
          <span class="launch-card__data__label">Launch Year:</span>
          <span class="launch-card__data__value">{this.launchyear}</span>
        </p>
        <p class="launch-card__data">
          <span class="launch-card__data__label">Successful Launch:</span>
          <span class="launch-card__data__value">
            {this.launchsuccess ? "true" : "false"}
          </span>
        </p>
        <p class="launch-card__data">
          <span class="launch-card__data__label">Successful Landing:</span>
          <span class="launch-card__data__value">
            {this.landsuccess ? "true" : "false"}
          </span>
        </p>
      </div>
    );
  }
}
