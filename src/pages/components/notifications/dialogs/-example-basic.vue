<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      基本的な利用例です。
    </template>

    <!-- dialog1 -->
    <vt@dialog-fragment>
      <vt@btn primary>Dialog 1</vt@btn>
      <vt@dialog
        ref="dialog1"
        fullscreen
        scrollable
        transition="vc@dialog-bottom-transition"
      >
        <vt@card>
          <vt@card-title>
            Dialog 1
          </vt@card-title>
          <vt@card-text>
            <vt@btn info @click.stop="$refs.dialog2.show">Dialog 2</vt@btn>
            <vt@btn info @click.stop="$refs.dialog3.show">Dialog 3</vt@btn>

            <vt@tooltip-fragment>
              <vt@btn>ツールチップ</vt@btn>
              <vt@tooltip>あいうえお</vt@tooltip>
            </vt@tooltip-fragment>
          </vt@card-text>
          <vt@card-actions>
            <vt@btn text-color="primary" @click.stop="$refs.dialog1.close">CLOSE</vt@btn>
          </vt@card-actions>
        </vt@card>
      </vt@dialog>
    </vt@dialog-fragment>

    <!-- dialog2 -->
    <vt@dialog-fragment>
      <vt@btn primary>Dialog 2</vt@btn>
      <vt@dialog ref="dialog2">
        <vt@card>
          <vt@card-title>
            Dialog 2
          </vt@card-title>
          <vt@card-text>
            <p>これはダイアログ2です。これはダイアログ2です。これはダイアログ2です。これはダイアログ2です。これはダイアログ2です。これはダイアログ2です。</p>
            <vt@menu-fragment>
              <vt@btn info>子メニュー</vt@btn>
              <vt@menu offset-y>
                <vt@card>
                  <vt@card-text>メニューです</vt@card-text>
                </vt@card>
              </vt@menu>
            </vt@menu-fragment>
            <vt@btn info @click.stop="$refs.dialog1.show">Dialog 1</vt@btn>
            <vt@btn info @click.stop="$refs.dialog3.show">Dialog 3</vt@btn>

            <vt@select>
              <vt@option value="1">選択肢1</vt@option>
              <vt@option value="2">選択肢2</vt@option>
              <vt@option value="3">選択肢3</vt@option>
            </vt@select>
          </vt@card-text>
          <vt@card-actions>
            <vt@btn text-color="info" @click.stop="$refs.dialog2.close">CLOSE</vt@btn>
          </vt@card-actions>
        </vt@card>
      </vt@dialog>
    </vt@dialog-fragment>

    <!-- dialog3 -->
    <vt@dialog-fragment>
      <vt@btn primary>Dialog 3</vt@btn>
      <vt@dialog ref="dialog3">
        <vt@card>
          <vt@card-title>
            <span>Dialog 3</span>
            <vt@spacer />
            <vt@menu-fragment>
              <vt@btn icon="ellipsis-v"></vt@btn>
              <vt@menu>
                <vt@tile-group>
                  <vt@tile v-for="n in 3" :key="n" @click="">
                    <vt@tile-title>Menu {{n}}</vt@tile-title>
                  </vt@tile>
                </vt@tile-group>
              </vt@menu>
            </vt@menu-fragment>
          </vt@card-title>
          <vt@card-actions>
            <vt@btn text-color="info" @click.stop="$refs.dialog3.close">CLOSE</vt@btn>
          </vt@card-actions>
        </vt@card>
      </vt@dialog>
    </vt@dialog-fragment>
  </docs-example>
</template>

<script>
export default {
}
</script>
