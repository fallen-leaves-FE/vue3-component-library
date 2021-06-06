<template>
  <div class="btns">
    <fa-button>
      default
    </fa-button>
    <fa-button type="text111">
      text
    </fa-button>
    <fa-button type="success">
      success
    </fa-button>
    <fa-button type="danger">
      danger
    </fa-button>
    <fa-button type="info">
      info
    </fa-button>
    <fa-button type="primary">
      primary
    </fa-button>
  </div>

  <div class="btns">
    <fa-button plain>
      default
    </fa-button>
    <fa-button
      type="text"
      plain
    >
      text
    </fa-button>
    <fa-button
      type="success"
      plain
    >
      success
    </fa-button>
    <fa-button
      type="danger"
      plain
    >
      danger
    </fa-button>
    <fa-button
      type="info"
      plain
    >
      info
    </fa-button>
    <fa-button
      type="primary"
      plain
    >
      primary
    </fa-button>
  </div>

  <div class="btns">
    <fa-button round>
      default
    </fa-button>
    <fa-button
      type="text"
      round
    >
      text
    </fa-button>
    <fa-button
      type="success"
      round
    >
      success
    </fa-button>
    <fa-button
      type="danger"
      round
    >
      danger
    </fa-button>
    <fa-button
      type="info"
      round
    >
      info
    </fa-button>
    <fa-button
      type="primary"
      round
    >
      primary
    </fa-button>
  </div>

  <div class="btns">
    <fa-button
      icon="fa-icon-plus-app"
      circle
    />
    <fa-button
      icon="fa-icon-delete-right"
      type="text"
      circle
    />
    <fa-button
      icon="fa-icon-delete-left"
      type="success"
      circle
    />
    <fa-button
      type="danger"
      icon="fa-icon-compass"
      circle
    />
    <fa-button
      icon="fa-icon-compass"
      type="info"
      circle
    />
    <fa-button
      icon="fa-icon-compass"
      type="primary"
      circle
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	setup () {

	}
})
</script>
<style>
	.btns {
		margin-bottom: 10px;
	}
</style>
